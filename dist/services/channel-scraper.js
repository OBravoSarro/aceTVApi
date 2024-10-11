import axios from 'axios';
import * as cheerio from 'cheerio';
import { IMAGE_MAP } from '../models/channel';
const CHANNELS_URL = 'https://elplan94.github.io/hook/';
const getImageUrl = (label) => {
    for (const key in IMAGE_MAP) {
        if (label.includes(key)) {
            return IMAGE_MAP[key];
        }
    }
    return '';
};
export const fetchChannels = async () => {
    try {
        const { data } = await axios.get(CHANNELS_URL);
        const $ = cheerio.load(data);
        const channels = [];
        $('h2#ESP---TV')
            .nextUntil('h2')
            .each((_, elem) => {
            const $elem = $(elem);
            if ($elem.is('p')) {
                const group = [];
                const parts = $elem.html()?.split('<br>') || [];
                parts.forEach((part) => {
                    const $part = cheerio.load(part);
                    const strong = $part('strong').first();
                    const labelMatch = strong.text().match(/(.+?)(?:\s\d+p)?$/);
                    const label = labelMatch ? labelMatch[1].trim() : '';
                    if (label) {
                        const hdLinks = [];
                        const fhdLinks = [];
                        const unknownLinks = [];
                        let currentResolution = 'unknown';
                        $part('*').each((_, node) => {
                            const element = $part(node);
                            if (element.is('strong')) {
                                const strongText = element.text();
                                if (strongText.includes('720p')) {
                                    currentResolution = '720';
                                }
                                else if (strongText.includes('1080p')) {
                                    currentResolution = '1080';
                                }
                                else {
                                    currentResolution = 'unknown';
                                }
                            }
                            if (element.is('a')) {
                                const href = element.attr('href');
                                if (href) {
                                    if (currentResolution === '720') {
                                        hdLinks.push(href);
                                    }
                                    else if (currentResolution === '1080') {
                                        fhdLinks.push(href);
                                    }
                                    else {
                                        unknownLinks.push(href);
                                    }
                                }
                            }
                        });
                        // Solo agregamos el objeto si hay al menos un enlace
                        if (hdLinks.length > 0 || fhdLinks.length > 0 || unknownLinks.length > 0) {
                            group.push({
                                image: getImageUrl(label),
                                label,
                                hd: hdLinks,
                                fhd: fhdLinks,
                                unknown: unknownLinks,
                            });
                        }
                    }
                });
                if (group.length > 0) {
                    channels.push(group);
                }
            }
        });
        return channels;
    }
    catch (error) {
        console.error('Error fetching channels:', error);
        throw new Error('Could not fetch channels');
    }
};

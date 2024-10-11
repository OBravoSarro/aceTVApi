import axios from 'axios';
import * as cheerio from 'cheerio';
import { ScheduleResponse } from '../models/schedule';

const SCRAPING_URL = 'http://141.145.210.168/';

export const fetchSchedules = async (): Promise<ScheduleResponse> => {
  try {
    const { data } = await axios.get(SCRAPING_URL);
    const $ = cheerio.load(data);

    const eventsDate = $('h1').text().match(/EVENTOS DEL (\d{2}-\d{2}-\d{4})/)?.[1] || '';

    const schedule = $('.styled-table tr').map((index, element) => {
      const columns = $(element).find('td');

      if (columns.length >= 5) {
        const hour = $(columns[0]).text().trim();
        const event = $(columns[1]).text().trim();
        const eventDetail = [$(columns[2]).text().trim(), $(columns[3]).text().trim()];

        const links: { label: string; link: string }[] = [];
        $(columns[4])
          .find('a')
          .each((_, linkElement) => {
            const label = $(linkElement).text().trim();
            const link = $(linkElement).attr('href') || '';
            links.push({ label, link });
          });

        return { hour, event, eventDetail, links };
      }
    }).get();

    return { eventsDate, schedule };
  } catch (error) {
    console.error('Error fetching schedules:', error);
    throw new Error('Could not fetch schedules');
  }
};

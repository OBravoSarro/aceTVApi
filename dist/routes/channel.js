import { Router } from 'express';
import { fetchChannels } from '../services/channel-scraper';
const router = Router();
/**
 * @swagger
 * /channel:
 *   get:
 *     summary: Retrieve a list of channels
 *     responses:
 *       200:
 *         description: A list of channels.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 */
router.get('/channel', async (req, res) => {
    try {
        res.json(await fetchChannels());
    }
    catch (_error) {
        res.status(500).json({ error: 'Failed to fetch channels' });
    }
});
export const channelRouter = router;

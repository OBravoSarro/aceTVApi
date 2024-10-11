import { Router, Request, Response } from 'express';
import { ScheduleResponse } from '../models/schedule';
import { fetchSchedules } from '../services/schedule-scraper';

const router = Router();

/**
 * @swagger
 * /schedule:
 *   get:
 *     summary: Retrieve a list of schedules
 *     responses:
 *       200:
 *         description: A list of schedules.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 */
router.get('/schedule', async (req: Request, res: Response<ScheduleResponse | {error: string}>) => {
  try {
    res.json(await fetchSchedules());
  } catch (_error) {
    res.status(500).json({ error: 'Failed to fetch schedules' });
  }
});

export const scheduleRouter = router;

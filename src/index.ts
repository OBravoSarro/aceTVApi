import cors from 'cors';
import express from 'express';
import { channelRouter } from './routes/channel';
import { scheduleRouter } from './routes/schedule';
import { setupSwagger } from './swagger';

const app = express();
app.use(
  cors({
    origin: '*',
    methods: ['GET'],
  }),
);

const port = process.env.PORT || 3000;

app.use(express.json());

app.use('', scheduleRouter);
app.use('', channelRouter);

setupSwagger(app);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
  console.log(`Swagger docs available at http://localhost:${port}/api-docs`);
});

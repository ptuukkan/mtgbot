import express from 'express';
import cors from 'cors';
import mtgRouter from './controllers/mtg.js';

const app = express();
app.use(cors());
app.use(
	express.urlencoded({
		extended: true,
	})
);

app.use('/', mtgRouter);

export default app;

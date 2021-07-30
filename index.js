import { createServer } from 'http';
import app from './app.js';
import dotenv from 'dotenv';

dotenv.config();

let PORT = process.env.PORT;

const server = createServer(app);

server.listen(PORT, () => {
	console.log(`Server running on port ${PORT}`);
});

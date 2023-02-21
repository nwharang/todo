import path from 'path';
import { fileURLToPath } from 'url';
import express from 'express';
import { handler as ssrHandler } from '../build/server/index.mjs';
import cookieParser from 'cookie-parser'

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();

app.use(cookieParser());
app.use(express.json());
app.use(express.static(path.join(__dirname, '..', '/build/client/')))
app.use(ssrHandler);

app.listen(3000, () => console.log('listening on port 3000'));
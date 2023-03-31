import path from 'path';
import { fileURLToPath } from 'url';
import express from 'express';
import { handler as ssrHandler } from '../build/server/index.mjs';
import cookieParser from 'cookie-parser'
import Router from './routes/index.js'
import bodyParser from 'body-parser'
import axios from "axios";


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();

app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, '..', '/build/client/')))
app.use(ssrHandler);

// Router
Router(app)

app.listen(3000, () => console.log('listening on port 3000'));
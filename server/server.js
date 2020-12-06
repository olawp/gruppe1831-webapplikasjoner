import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import helmet from 'helmet';
import cookieParser from 'cookie-parser';
import mongoSanitizer from 'express-mongo-sanitize';
import xssClean from 'xss-clean';
import hpp from 'hpp';

import { PORT } from './constants/index.js';
import 'dotenv/config.js';
import errorMiddleware from './middleware/errors.js';

import databaseConnection from './config/db.js';

import user from './routes/user.js';
import article from './routes/article.js';
import auth from './routes/auth.js';
import category from './routes/category.js';
import contact from './routes/contact.js';
import image from './routes/image.js';

const app = express();
app.use(helmet());
app.use(mongoSanitizer());
app.use(xssClean());
app.use(hpp());

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use(express.json());

app.use(
  cors({
    origin: 'http://localhost:3000',
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true,
  })
);

app.use(cookieParser());

app.use(`${process.env.BASEURL}/users`, user);
app.use(`${process.env.BASEURL}/articles`, article);
app.use(`${process.env.BASEURL}/`, auth);
app.use(`${process.env.BASEURL}/categories`, category);
app.use(`${process.env.BASEURL}/contact`, contact);
app.use(`${process.env.BASEURL}/`, image);

app.use(errorMiddleware);

databaseConnection();

const server = app.listen(PORT, console.log(`Server running on port ${PORT}`));

process.on('unhandledRejection', (err) => {
  console.log(`Error: ${err.message}`);
  console.log('Shutting down server due to unhandled promise rejection');
  server.close(() => {
    process.exit(1);
  });
});

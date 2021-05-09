import path from 'path';
import dotenv from 'dotenv';

dotenv.config({ path: path.join(__dirname, '..', '..', '.env') });

const {
  DB_HOST,
  DB_COMPOSE_HOST,
  DB_PORT,
  DB_USERNAME,
  DB_PASSWORD,
  DB_NAME,
  TOKEN_SECRET,
  TOKEN_EXPIRATION,
} = process.env;

const PORT = Number(process.env.PORT);
const DB_URL = process.env.DATABASE_URL || process.env.DB_URL;
const SERVER_PORT = Number(process.env.SERVER_PORT);
const DB_LOGGING_LEVEL = process.env.DB_LOGGING_LEVEL?.split(',');

export {
  PORT,
  SERVER_PORT,
  DB_URL,
  DB_HOST,
  DB_COMPOSE_HOST,
  DB_PORT,
  DB_USERNAME,
  DB_PASSWORD,
  DB_NAME,
  DB_LOGGING_LEVEL,
  TOKEN_SECRET,
  TOKEN_EXPIRATION,
};

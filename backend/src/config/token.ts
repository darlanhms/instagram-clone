import { config } from 'dotenv';

config();

export default {
  expiresIn: '1d',
  secret: process.env.TOKEN_SECRET,
};

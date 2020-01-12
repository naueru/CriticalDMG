import mongoose from 'mongoose';
import { Application } from './declarations';
import logger from './logger';

const DATABASE_URL = process.env.DATABASE_URL;

export default function (app: Application) {
  // TODO initialize config adding this enviroment vars
  const databaseUrl = DATABASE_URL || app.get('mongodb');
  mongoose.connect(
    databaseUrl,
    { useCreateIndex: true, useNewUrlParser: true }
  ).catch(err => {
    logger.error(err);
    process.exit(1);
  });
  
  mongoose.Promise = global.Promise;

  app.set('mongooseClient', mongoose);
}

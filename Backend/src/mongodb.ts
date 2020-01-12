import { MongoClient } from 'mongodb';
import { Application } from './declarations';


// TODO Move to config, somehow
const DATABASE_URL = process.env.DATABASE_URL

export default function (app: Application) {
  const connection = DATABASE_URL || app.get('mongodb');
  const database = connection.substr(connection.lastIndexOf('/') + 1);
  const mongoClient = MongoClient.connect(connection, { useNewUrlParser: true })
    .then(client => client.db(database));

  app.set('mongoClient', mongoClient);
}

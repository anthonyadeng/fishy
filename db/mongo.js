const { MongoClient, ServerApiVersion } = require('mongodb');

const uri = process.env.MONGO_URI;

const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.latest,
});
let db;
export async function connect() {
  try {
    console.log('Connecting to MongoDB');
    await client.connect();
    console.log('Connected to MongoDB');
    db = client.db(process.env.MONGO_DB);
  } catch (error) {
    console.error('Error connecting to MongoDB', error);
  }
}
connect().catch(console.error);
async function close() {
  try {
    await client.close();
    console.log('Connection to MongoDB closed');
  } catch (error) {
    console.error('Error closing connection to MongoDB', error);
  }
}

process.on('SIGINT', close).on('SIGTERM', close).on('SIGUSR2', close);
export { db };

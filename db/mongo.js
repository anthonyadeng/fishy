const { MongoClient, ServerApiVersion } = require('mongodb');

const uri = process.env.MONGO_URI;

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

export let db;

async function connect() {
  try {
    await client.connect();
    console.log('Connected to MongoDB');
    db = client.db(process.env.MONGO_DB);
  } catch (error) {
    console.error('Error connecting to MongoDB', error);
  }
}

// Call connect when your app starts
connect().catch(console.dir);

// Then you can call doSomeOperation whenever you need to perform an operation

async function close() {
  try {
    await client.close();
    console.log('Connection to MongoDB closed');
  } catch (error) {
    console.error('Error closing connection to MongoDB', error);
  }
}

process.on('SIGINT', close).on('SIGTERM', close).on('SIGUSR2', close);

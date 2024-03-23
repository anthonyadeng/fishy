import { db } from './mongo.js';

const collection = db.collection('todos');

async function readTodos() {
  try {
    const todos = await collection.find().toArray();
    return todos;
  } catch (error) {
    console.error('Error reading todos', error);
  }
}

doSomeOperation().catch(console.dir);

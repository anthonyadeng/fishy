import { db } from '../../db/mongo.js';

export const getTodos = async (): Promise<Todo[]> => {
  try {
    const todos = await db.collection('todos').find().toArray();
    return todos;
  } catch (error) {
    console.error('Error in getTodos:', error);
    return [];
  }
};
export const getTanks = async (): Promise<Tank[]> => {
  try {
    const tanks = await db.collection('tanks').find().toArray();
    return tanks;
  } catch (error) {
    console.error('Error in getTanks:', error);
    return [];
  }
};
export const getLinks = async (): Promise<Link[]> => {
  try {
    const links = await db.collection('links').find().toArray();
    return links;
  } catch (error) {
    console.error('Error in getLinks:', error);
    return [];
  }
};

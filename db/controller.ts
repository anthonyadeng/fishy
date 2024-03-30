'use server';

import { db } from './mongo.js';
export const getTodos = async (): Promise<Todo[]> => {
  try {
    const doc = await db.collection('UserData').findOne({ uid: '1' });
    return doc.todosGeneral.toArray();
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

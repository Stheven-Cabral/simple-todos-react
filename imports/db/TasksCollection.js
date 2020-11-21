// Section for api related code.
import { Mongo } from 'meteor/mongo';
 
// Creates a mongoDB collection.
export const TasksCollection = new Mongo.Collection('tasks');
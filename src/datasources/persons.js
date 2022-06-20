import { db } from './persons-db.js';
let nextId = db.length;

const getPersons = () => {
  return db;
};

const getPerson = (id) => {
  return db.find(p => {
    return p.id === id
  });
};

const getPersonsCars = () => {
  return db.reduce((r, p) => r.concat(p.cars), []);
};

const addPerson = (person) => {
  const newPerson = {
    ...person,
    id: nextId
  }
  db.push(newPerson);
  nextId += 1;
  return newPerson;
};

const removePerson = (id) => {
  const index = db.findIndex(p => p.id === id);
  if (index >= 0) {
    const person = db[index];
    db.splice(index, 1);
    return person;
  }
  return null;
};

export default {
  getPersons,
  getPerson,
  getPersonsCars,
  addPerson,
  removePerson
};
import fetch from 'node-fetch';

const getTodos = async () => {
  const response = await fetch('https://gorest.co.in/public/v2/todos');
  const data = await response.json();
  return data;
};

const getTodo = async (id) => {
  const response = await fetch(`https://gorest.co.in/public/v2/todos/${id}`);
  const data = await response.json();
  return data;
};

export default {
  getTodos,
  getTodo
};
import personsDatasources from './persons.js';
import todosDatasources from './todos.js';

export const dataSources = () => ({
  ...personsDatasources,
  ...todosDatasources
});
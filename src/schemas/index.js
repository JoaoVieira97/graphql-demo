import { makeExecutableSchema } from '@graphql-tools/schema';
import { typeDefs as Persons, resolvers as personsResolvers } from './persons.js';
import { typeDefs as Todos, resolvers as todosResolvers } from './todos.js';
import _ from 'lodash';

export const schema = makeExecutableSchema({
  typeDefs: [Persons, Todos],
  resolvers: _.merge(personsResolvers, todosResolvers)
});
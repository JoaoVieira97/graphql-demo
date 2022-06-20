import { ApolloServer } from 'apollo-server';
import { dataSources } from './datasources/index.js';
import { schema } from './schemas/index.js';

const server = new ApolloServer({ schema, dataSources });

server.listen().then(({ url }) => {
  console.log(`Apollo Server ready (${url})`)
});
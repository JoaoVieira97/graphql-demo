import { gql } from 'apollo-server';

export const typeDefs = gql`
  type Query {
    getTodos: [Todo]
    getTodo(id: Int!): Todo
  }

  type Todo {
    id: ID
    user_id: Int
    title: String
    due_on: String
    status: String
  }
`;

export const resolvers = {
  Query: {
    getTodos(_, {}, { dataSources }) { return dataSources.getTodos() },
    getTodo(_, { id }, { dataSources }) { return dataSources.getTodo(id) }
  }
};
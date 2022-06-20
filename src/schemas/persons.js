import { gql } from 'apollo-server';

export const typeDefs = gql`
  type Query {
    getPersons: [Person]
    getPerson(id: Int!): Person
    getPersonsCars: [Car]
  }

  type Mutation {
    addPerson(person: PersonInput!): Person
    removePerson(id: Int!): Person
  }

  type Person {
    id: Int
    name: String
    email: String
    gender: String
    age: Int
    cars: [Car]
  }

  type Car {
    model: String
    year: Int
    fuel: String
  }

  input PersonInput {
    name: String!
    email: String
    gender: String
    age: Int
    cars: [CarInput]
  }

  input CarInput {
    model: String!
    year: Int!
    fuel: String!
  }
`;

export const resolvers = {
  Query: {
    getPersons(_, {}, { dataSources }) { return dataSources.getPersons() },
    getPerson(_, { id }, { dataSources }) { return dataSources.getPerson(id) },
    getPersonsCars(_, {}, { dataSources }) { return dataSources.getPersonsCars() }
  },
  Mutation: {
    addPerson(_, { person }, { dataSources }) { return dataSources.addPerson(person) },
    removePerson(_, { id }, { dataSources }) { return dataSources.removePerson(id) }
  }
};
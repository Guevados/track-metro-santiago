import gql from 'graphql-tag';

export const typeDefs = gql`
  type Query {
    hello: String

    busStop(id: ID!): BusStop!
  }

  type BusStop {
    id : ID!
    name: String!
    status_code: Boolean!
    status_description: String!
    services: [Services!]
  }

  type Services {
    id: ID!
    valid: Boolean!
    status_description: String!
    buses: [Buses!]
  }

  type Buses {
    id: ID!
    meters_distance: Int!
    min_arrival_time: Int!
    max_arrival_time: Int!
  }
`;


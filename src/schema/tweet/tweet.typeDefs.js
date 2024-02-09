import {gql} from "apollo-server"

const typeDefs = gql`

  type User {
    id: ID!
    firstName: String!
    lastName: String!
    """ 
    Is the sum of firstName + lastName as a String
     """
    fullName: String!
  }

  """
    Tweet Object represents a resources for a Tweet
  """
  type Tweet {
    id: ID!
    text: String!
    author: User
  }

  
  type Query {
    allUsers: [User!]!
    allTweets: [Tweet!]!
    tweet(id: ID!): Tweet
    ping: String!
  }

  type Mutation {
    postTweet(text: String!, id: ID!, userId: ID!): Tweet!
    """ 
    Deletes a Tweet if found, else returns false
     """
    deleteTweet(id: ID!): Boolean!
  }
  
`

export default typeDefs
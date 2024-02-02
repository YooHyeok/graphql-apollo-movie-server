import {ApolloServer, gql} from "apollo-server"

const typeDefs = gql`
  type Query {
    text: String
    hello: String
  }
` //SDL :Schema Definition Language

const server = new ApolloServer({typeDefs})
server.listen().then(({url}) => {
  console.log(`Running on ${url}`)
}) // listenm은 promise이다.
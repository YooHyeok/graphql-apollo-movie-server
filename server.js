import {ApolloServer, gql} from "apollo-server"

const typeDefs = gql`
  type User { # 사용자 지정 타입으로 데이터베이스의 관계에 따라 결정된다.
    id: ID
    username: String # 이러한 타입을 ScalarType이라고 한다.
  }

  type Tweet { # allTweets이 반환하는 사용자 지정 type이다.
    id: ID
    text: String
    author: User
  }

  type Query { # root type
    allTwwets: [Tweet] # Tweet 타입 형태의 List를 반환한다.
    tweet: Tweet
  }
  
` //SDL :Schema Definition Language

const server = new ApolloServer({typeDefs})
server.listen().then(({url}) => {
  console.log(`Running on ${url}`)
}) // listenm은 promise이다.
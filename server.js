import {ApolloServer, gql} from "apollo-server"

/**
 * SDL :Schema Definition Language
 * 사용자가 요청할 데이터의 타입에대한 정의로 서버에서 필요로 한다.
 */
const typeDefs = gql`

  type User { # 사용자 지정 타입으로 데이터베이스의 관계에 따라 결정된다.
    id: ID!
    firstName: String! # 이러한 타입을 ScalarType이라고 한다.
    lastName: String!
    fullName: String!
  }

  type Tweet { # allTweets이 반환하는 사용자 지정 type이다.
    id: ID!
    text: String!
    author: User
  }

  type Query { # root type
    allUsers: [User!]!
    allTweets: [Tweet!]! # Tweet 타입 형태의 List를 반환한다.
    tweet(id: ID!): Tweet
    ping: String!
  }

  type Mutation {
    postTweet(text: String!, id: ID!): Tweet!
    deleteTweet(id: ID!): Boolean!
  }
  
`

let tweets = [
  {
    id: "1",
    text: "first one!",
  },
  {
    id: "2",
    text: "second one!",
  }
]

let users = [
  {
    id: "1",
    firstName: "Yoo",
    lastName: "Hyeok",
    fullName: function() {
      return this.firstName + " " + this.lastName
    }
  },
  {
    id: "2",
    firstName: "Lee",
    lastName: "Equals",
    fullName: function() {
      return this.firstName + " " + this.lastName
    }  
  }
]

/**
 * 타입 정의와 같은 형태를 가져야 한다.
 * SDL에서의 타입 이름과 객체 속성명이 같아야 하며
 * 타입에 존재하는 메소드이름이 각각 일치해야 한다.
 */
const resolvers = {
  Query: {
    tweet(_, arg) { // 두번째 매개변수가 서버를통해 사용자로부터 넘겨받을 요청 매개변수이다.
      return tweets.find(tweet =>tweet.id === arg.id);
    },
    ping() {
      return "pong"
    },
    allTweets() {
      return tweets
    },
    allUsers() {
      return users
    }
  },

  Mutation: {
    /**
     * mutation Mutation($text: String!, $postTweetId: ID!, $deleteTweetId: ID!) {
     *  postTweet(text: $text, id: $postTweetId) {
     *  id
     *  text
     * }
     */
    postTweet(_, arg) {
      const newTweet = {id: tweets.length+1, text: arg.text}
      tweets.push(newTweet)
      return newTweet
    },
    /**
     * mutation Mutation($text: String!, $postTweetId: ID!, $deleteTweetId: ID!) {
     *  deleteTweet(id: $deleteTweetId) 
     * }
     */
    deleteTweet(_, arg) {
      const isIncludes = tweets.includes(tweets.find(tweet => tweet.id == arg.id));
      console.log(isIncludes)
      if(!isIncludes) return false;
      tweets = tweets.filter(tweet => tweet.id != arg.id);
      console.log(tweets)
      return true
    }
  },

  /**
   * 동적 Fields 값 적용을 위한 Type Resolver
   */
  User: {
    fullName(root, arg) { // 동적 필드에 대한 resorver가 작동된다.
      console.log(root) // root에 User에 대한 데이터가 순차적으로 들어온다.
      return root.firstName + " " + root.lastName
    }
  }
}

const server = new ApolloServer({typeDefs, resolvers})
server.listen().then(({url}) => {
  console.log(`Running on ${url}`)
}) // listenm은 promise이다.
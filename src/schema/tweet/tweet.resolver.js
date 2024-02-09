let tweets = [
  {
    id: "1",
    text: "first one!",
    userId: "2"
  },
  {
    id: "2",
    text: "second one!",
    userId: "1"
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
     * mutation Mutation($text: String!, $postTweetId: ID!, $userId: ID!) {
     *  postTweet(text: $text, id: $postTweetId) {
     *  id
     *  text
     * }
     */
    postTweet(_, arg) {
      const findUser = users.find(user => user.id == arg.userId)
      const result = users.includes(findUser)
      if (!result) return false;
      const newTweet = {id: tweets.length+1, text: arg.text, userId: arg.userId}
      tweets.push(newTweet)
      return newTweet
    },
    /**
     * mutation Mutation($deleteTweetId: ID!) {
     *  deleteTweet(id: $deleteTweetId) 
     * }
     */
    deleteTweet(_, arg) {
      const isIncludes = tweets.includes(tweets.find(tweet => tweet.id == arg.id));
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
  },
  Tweet: {
    author(root, arg) {
      return users.find(user=>user.id == root.userId);/* tweets Array의 tweet객체중 userId가 일치하는 userId를 검색 후 반환 */
    }
  }
}

export default resolvers
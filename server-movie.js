import {ApolloServer, gql} from "apollo-server"
import fetch from "node-fetch";

/**
 * SDL :Schema Definition Language
 * 사용자가 요청할 데이터의 타입에대한 정의로 서버에서 필요로 한다.
 */
const typeDefs = gql`
  # 키만 가져온다 : 개발자도구 콘솔에 아래 작업 수행
  # const movie = 복붙
  # Object.keys(movie)
  type Movie {
      id: Int!
      url: String!
      imdb_code: String!
      title: String!
      title_english: String!
      title_long: String!
      slug: String!
      year: Int!
      rating: Float!
      runtime: Float!
      genres: [String]!
      summary: String
      description_full: String!
      synopsis: String
      yt_trailer_code: String!
      language: String!
      background_image: String!
      background_image_original: String!
      small_cover_image: String!
      medium_cover_image: String!
      large_cover_image: String!
  }


  
  type Query { # root type
    allMovies: [Movie!]!
    movie(id: String!): Movie!
  }
`

/**
 * 타입 정의와 같은 형태를 가져야 한다.
 * SDL에서의 타입 이름과 객체 속성명이 같아야 하며
 * 타입에 존재하는 메소드이름이 각각 일치해야 한다.
 */
const resolvers = {
  Query: {

    async allMovies() {
      return await fetch("https://yts.mx/api/v2/list_movies.json")
      .then(res=>res.json())
      .then(json=>json.data.movies);
    },
    async movie(_, arg) {
      return await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${arg.id}`)
      .then(res=>res.json())
      .then(json=>json.data.movie);
    }
  },


}

const server = new ApolloServer({typeDefs, resolvers})
server.listen().then(({url}) => {
  console.log(`Running on ${url}`)
}) // listenm은 promise이다.
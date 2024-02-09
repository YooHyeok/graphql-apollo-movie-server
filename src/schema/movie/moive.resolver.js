import fetch from "node-fetch";

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
export default resolvers
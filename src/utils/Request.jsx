const bseURL = process.env.baseURL;
const baseImageURL = process.env.baseImageURL;

export default {
  fetchTrending: {
    id: 1,
    title: "TRENDING",
    url: ``,
  },
  fetchActionMovies: {
    title: "ACTION",
    url: `${baseImageURL}`,
  },
  fetchHorrorMovies: {
    id: 2,
    title: "HORROR",
    url: "",
  },
  fetchRomanceMovies: {
    id: 3,
    title: "ROMANCE",
    url: "",
  },
  fetchTopRated: {
    id: 4,
    title: "TOP RATED",
    url: "",
  },
  fetchComedyMovies: {
    id: 5,
    title: "Comedy",
    url: "/comedy_movies",
  },
};

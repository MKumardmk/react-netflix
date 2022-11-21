const key = "8f88968dd31fa5fa31488549bad27b59";

const requests = {
  requestPopular: `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=1`,
  requestTopRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=en-US&page=1`,
  requestTrending: `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=2`,
  requestHorror: `https://api.themoviedb.org/3/search/movie?api_key=${key}&language=en-US&query=horror&page=1&include_adult=false`,
  requestUpcoming: `https://api.themoviedb.org/3/movie/upcoming?api_key=${key}&language=en-US&page=1`,
  accessToken:
    "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4Zjg4OTY4ZGQzMWZhNWZhMzE0ODg1NDliYWQyN2I1OSIsInN1YiI6IjYzN2EzMTI5OTc2ZTQ4MDBiNDU1Yzk3YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.-PiWTgRhUQ6IVJgzldSaZEn1MY4q-d65u8IeUVp5egw",
};

export default requests;

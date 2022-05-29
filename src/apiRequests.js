const ApiKey = "fa2a2fef81cda2d19dbb78f4ac8437a3"

const requests = {
    getPopular: `https://api.themoviedb.org/3/movie/popular?api_key=${ApiKey}&language=en-US&page=1`,
    getTopRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${ApiKey}&language=en-US&page=1`,
    getLatest: `https://api.themoviedb.org/3/movie/{movie_id}?api_key=${ApiKey}&language=en-US`,
    getPopularTV: `https://api.themoviedb.org/3/tv/popular?api_key=${ApiKey}&language=en-US&page=1`,
    getTVOnAir: `https://api.themoviedb.org/3/tv/on_the_air?api_key=${ApiKey}&language=en-US&page=1`,
    getLatestTV: `https://api.themoviedb.org/3/tv/latest?api_key=${ApiKey}&language=en-US`
}

export default requests
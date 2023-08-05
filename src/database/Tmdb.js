const basicFecth = async (endpoint) => {
  const req = await fetch(`${process.env.NEXT_PUBLIC_TMDB_API_BASE}${endpoint}`)
  const json = await req.json()

  return json
}

export default {
  getHomeList: async () => {
    return [
      {
        slug: 'originals',
        title: 'Originals of Netflix',
        items: await basicFecth(
          `/discover/tv?with_networks=213&language=${process.env.NEXT_PUBLIC_TMDB_API_LANGUAGE}&api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}`
        ),
      },
      {
        slug: 'trending',
        title: 'Trending',
        items: await basicFecth(
          `/trending/all/week?&language=${process.env.NEXT_PUBLIC_TMDB_API_LANGUAGE}&api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}`
        ),
      },
      {
        slug: 'toprated',
        title: 'Top Rated',
        items: await basicFecth(
          `/movie/top_rated?&language=${process.env.NEXT_PUBLIC_TMDB_API_LANGUAGE}&api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}`
        ),
      },
      {
        slug: 'action',
        title: 'Action',
        items: await basicFecth(
          `/discover/movie?with_genres=28&language=${process.env.NEXT_PUBLIC_TMDB_API_LANGUAGE}&api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}`
        ),
      },
      {
        slug: 'commedy',
        title: 'Comedy',
        items: await basicFecth(
          `/discover/movie?with_genres=35&language=${process.env.NEXT_PUBLIC_TMDB_API_LANGUAGE}&api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}`
        ),
      },
      {
        slug: 'horror',
        title: 'Horror',
        items: await basicFecth(
          `/discover/movie?with_genres=27&language=${process.env.NEXT_PUBLIC_TMDB_API_LANGUAGE}&api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}`
        ),
      },
      {
        slug: 'romance',
        title: 'Romance',
        items: await basicFecth(
          `/discover/movie?with_genres=10749&language=${process.env.NEXT_PUBLIC_TMDB_API_LANGUAGE}&api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}`
        ),
      },
      {
        slug: 'documentary',
        title: 'Documentary',
        items: await basicFecth(
          `/discover/movie?with_genres=99&language=${process.env.NEXT_PUBLIC_TMDB_API_LANGUAGE}&api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}`
        ),
      },
    ]
  },
  getMovieInfo: async (movieId, type) => {
    var info = {}

    if (movieId) {
      switch (type) {
        case 'movie':
          info = await basicFecth(
            `/movie/${movieId}?language=${process.env.NEXT_PUBLIC_TMDB_API_LANGUAGE}&api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}`
          )
          break
        case 'tv':
          info = await basicFecth(
            `/tv/${movieId}?language=${process.env.NEXT_PUBLIC_TMDB_API_LANGUAGE}&api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}`
          )
          break
        default:
          info = null
          break
      }
    }

    return info
  },
}


export interface Movie {
  id: number,
  title: string,
  vote_count: number,
  video: boolean,
  vote_average: number,
  popularity: number,
  poster_path: string,
  original_language: string,
  original_title: string,
  backdrop_path: string,
  adult: boolean,
  overview: string,
  release_date: string,
}

export interface Genre {
  id: number
  name: string
}


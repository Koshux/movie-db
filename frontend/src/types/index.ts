
export interface Movie {
  id: number,
  attributes: {
    title: string
    genre: string
    year: string
    // rating: number
    // director: string
    // actors: string
    // plot: string
    // poster: string
  }
}

export interface Genre {
  id: number
  attributes: {
    name: string
  }
}


import axios from 'axios'
import { Movie } from '../types'

const API_URL = 'http://localhost:4000/api/movies'

export const fetchMovies = async (genre?: string, query?: string) => {
  let url
  if (query && genre) {
    url = `${API_URL}/search?title=${query}&genre=${genre}`
  } else if (query) {
    url = `${API_URL}/search?title=${query}`
  } else if (genre) {
    url = `${API_URL}?genre=${genre}`
  } else {
    url = API_URL
  }

  try {
    const response = await axios.get(url)
    return response.data.data.map((movie: Movie) => ({
      id: movie.id,
      ...movie.attributes,
    }))
  } catch (err) {
    throw new Error('Error fetching movies')
  }
}

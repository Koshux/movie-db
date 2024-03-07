import axios from "axios"
import { Movie } from "../components/Movies"

const API_URL = 'http://localhost:4000/api/movies'

export const fetchMovies = async (query?: string) => {
  const url = query ? `${API_URL}/search?title=${query}` : API_URL

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

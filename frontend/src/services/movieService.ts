import axios from "axios"

const API_URL = 'http://localhost:4000/api/movies'

export const fetchMovies = async () => {
  try {
    const response = await axios.get(API_URL)
    return response.data
  } catch (err) {
    throw new Error('Error fetching movies')
  }
}

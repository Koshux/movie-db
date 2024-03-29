import { useGetMoviesByCategoryQuery } from '../features/movies/moviesApi'
import { Movie } from '../types'

const
MovieList = ({ category, filter, genre }: { category: string, filter: string, genre: string }) => {
  const { data: movies, error, isLoading } = useGetMoviesByCategoryQuery(category)

  if (isLoading) return <div>Loading...</div>
  if (error) return <div>Error: {error.toString()}</div>

  return (
    <div>
      <h2>{category}</h2>
      <ul>
        {movies?.map((movie: Movie) => (
          <li key={movie.id}>
            {movie.title}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default MovieList

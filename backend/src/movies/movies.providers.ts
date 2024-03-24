import { Movie } from './entities/movie.entity'

export const moviesProviders = [
  {
    provide: 'MOVIES_REPOSITORY',
    useValue: Movie,
  },
]

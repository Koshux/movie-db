import { Request, Response } from "express"
import Movie from '../db/models/movie'

export const listMovies = async (req: Request, res: Response) => {
  const movies = await Movie.findAll()
  res.json(movies)
}

export const searchMovie = async (req: Request, res: Response) => {
  const { title } = req.query
  const movie = await Movie.findAll({
    where: {
      title
    }
  })

  res.json(movie)
}

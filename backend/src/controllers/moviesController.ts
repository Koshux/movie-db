import { Request, Response } from "express"
import Movie from '../db/models/movie'
import { Op } from "sequelize"
import MovieSerializer from "../serializers/movieSerializer"

export const listMovies = async (req: Request, res: Response) => {
  try {
    const movies = await Movie.findAll()

    res.json(MovieSerializer.serialize(movies))
  } catch (err: any) {
    res.status(500).json({
      errors: [{
        title: 'Error fetching movies',
        detail: err.message
      }]
    })
  }
}

export const searchMovie = async (req: Request, res: Response) => {
  const { title } = req.query

  try {
    const movies = await Movie.findAll({
      where: title ? {
        title: {
          [Op.iLike]: `%${title}%`
        }
      } : undefined
    })

    res.json(MovieSerializer.serialize(movies))
  } catch (err: any) {
    res.status(500).json({
      errors: [{
        title: 'Error searching for movies',
        detail: err.message
      }]
    })
  }

}

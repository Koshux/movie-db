import { Request, Response } from "express"
import Movie from '../db/models/movie'
import { Op } from "sequelize"
import MovieSerializer from "../serializers/movieSerializer"
import Genre from "../db/models/genre"

export const listMovies = async (req: Request, res: Response) => {
  const { genre } = req.query

  try {
    const queryOptions = genre ? {
      where: {
        genre: {
          [Op.iLike]: `%${genre}%`
        }
      }
    } : {}

    const movies = await Movie.findAll(queryOptions)

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
      } : {}
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

export const searchGenre = async (req: Request, res: Response) => {
  try {
    // const genres = await Movie.aggregate('genre', 'DISTINCT', { plain: false })
    // I need to use sequelize to filter genres by the request query parameter using JSON:API filter spec. If there's no filter, I should return all genres.
    const genres = await Genre.findAll({
      where: req.query.genre ? {
        genre: {
          [Op.iLike]: `%${req.query.genre}%`
        }
      } : {}
    })
    // const genres = await Genre.findAll({
    //   attributes: ['genre'],
    //   group: ['genre']
    // })

    res.json(MovieSerializer.serialize(genres))
  } catch (err: any) {
    res.status(500).json({
      errors: [{
        title: 'Error fetching genres',
        detail: err.message
      }]
    })
  }
}

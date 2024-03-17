import { Request, Response } from 'express'
import { ParsedQs } from 'qs'
import Movie from '../db/models/movie'
import { Op } from 'sequelize'
import MovieSerializer from '../serializers/movieSerializer'
import Genre from '../db/models/genre'

export const listMovies = async (req: Request, res: Response) => {
  const { genre } = req.query

  debugger
  try {
    const queryOptions = genre ? {
      where: {
        genre: {
          [Op.like]: `%${genre}%`
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
          [Op.like]: `%${title}%`
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
    const genreFilter = (req.query.filter as ParsedQs).genre
    // const genres = await Movie.aggregate('genre', 'DISTINCT', { plain: false })
    const filter = genreFilter ? { where : { genre: { [Op.like]: `%${genreFilter}%` } } } : {}
    const genres = await Genre.findAll(filter)
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

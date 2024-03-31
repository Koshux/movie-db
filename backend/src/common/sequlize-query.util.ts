// src/common/sequelize-query.util.ts
import { Injectable } from '@nestjs/common'
import { ModelCtor } from 'sequelize-typescript'
import Genre from 'src/models/genre.model'
import Movie from 'src/models/movie.model'
import { MovieGenre } from 'src/models/movie-genre.model'
import { Op } from 'sequelize'

export interface QueryParams {
  search?: string
  genre?: string
}

export interface SequelizeOptions {
  where: any
  include: any[]
  offset: number
  limit: number
  order: any[]
}

@Injectable()
export class SequelizeQueryUtil {
  parseQueryParams(query: QueryParams): SequelizeOptions {
    const options: any = {
      where: this.parseFilter(query.search),
      include: this.parseInclude(query.genre),
    }

    return options
  }

  private parseFilter(search?: string) {
    if (!search) return {}

    const where = {}

    if (search) {
      where['title'] = { [Op.like]: `%${search}%` }
    }

    return where
  }

  private parseInclude(genreId?: string) {
    if (!genreId) return []

    if (genreId && genreId !== 'all') {
      return [
        {
          model: Genre,
          where: { id: genreId },
          through: { attributes: [] },
          required: true,
        },
      ]
    }
  }
}

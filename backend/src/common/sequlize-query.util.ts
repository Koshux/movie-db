// src/common/sequelize-query.util.ts
import { Injectable } from '@nestjs/common'
import { ModelCtor } from 'sequelize-typescript'
import Genre from 'src/models/genre.model'
import Movie from 'src/models/movie.model'
import { MovieGenre } from 'src/models/movie-genre.model'

export interface QueryParams {
  filter?: string
  include?: string
  page?: string
  limit?: string
  sort?: string
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
      where: this.parseFilter(query.filter),
      include: this.parseInclude(query.include),
      ...this.parsePagination(query.page, query.limit),
      order: this.parseSort(query.sort),
    }

    return options
  }

  private parseFilter(filter?: string) {
    if (!filter) return {}
    try {
      return JSON.parse(filter)
    } catch (error) {
      return {}
    }
  }

  private parseInclude(include?: string) {
    if (!include) return []

    const modelMapping: { [key: string]: ModelCtor<any> } = {
      'genre': Genre,
      'movie-genre': MovieGenre,
      'movie': Movie,
    }

    return include.split(',').map(relation => {
      const model = modelMapping[relation]

      return model ? { model, through: { attributes: [] } } : null
    }).filter(include => include !== null)
  }

  private parsePagination(page?: string, limit?: string) {
    const paginationOptions: Partial<SequelizeOptions> = {}
    if (page && limit) {
      paginationOptions['offset'] = (parseInt(page, 10) - 1) * parseInt(limit, 10)
      paginationOptions['limit'] = parseInt(limit, 10)
    }
    return paginationOptions
  }

  private parseSort(sort?: string) {
    if (!sort) return []

    return sort.split(',').map(s => {
      return s.startsWith('-') ? [s.substring(1), 'DESC'] : [s, 'ASC']
    })
  }
}

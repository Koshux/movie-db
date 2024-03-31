import { Body, Delete, Get, HttpStatus, Inject, Injectable, Param, Patch, Post, Query, Res } from '@nestjs/common'
import { CreateMovieDto } from './dto/create-movie.dto'
import { UpdateMovieDto } from './dto/update-movie.dto'
import Movie from 'src/models/movie.model'
import { MoviesRepository } from './movies.repository'
import { QueryParams, SequelizeQueryUtil } from 'src/common/sequlize-query.util'

@Injectable()
export class MoviesService {
  constructor(
    private sequelizeQueryUtil: SequelizeQueryUtil,
    private readonly moviesRepository: MoviesRepository
  ) {}

  create(createMovieDto: CreateMovieDto): Promise<Movie> {
    return this.moviesRepository.create(createMovieDto)
  }

  async findAll(queryParams: QueryParams): Promise<Movie[]> {
    const options = this.sequelizeQueryUtil.parseQueryParams(queryParams)
    return this.moviesRepository.findAll(options)
  }

  findOne(id: number): Promise<Movie> {
    return this.moviesRepository.findOne(id)
  }

  update(id: number, updateMovieDto: UpdateMovieDto) {
    return this.moviesRepository.update(+id, updateMovieDto)
  }

  remove(id: number) {
    return this.moviesRepository.remove(+id)
  }
}

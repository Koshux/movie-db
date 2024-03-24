import { Body, Delete, Get, HttpStatus, Inject, Injectable, Param, Patch, Post, Query, Res } from '@nestjs/common'
import { CreateMovieDto } from './dto/create-movie.dto'
import { UpdateMovieDto } from './dto/update-movie.dto'
import Movie from 'src/models/movie'
import { MoviesRepository } from './movies.repository'

@Injectable()
export class MoviesService {
  constructor(
    private readonly moviesRepository: MoviesRepository
  ) {}

  create(createMovieDto: CreateMovieDto): Promise<Movie> {
    return this.moviesRepository.create(createMovieDto)
  }

  async findAll(genre?: string): Promise<Movie[]> {
    return this.moviesRepository.findAll(genre)
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.moviesRepository.findOne(id)
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() updateMovieDto: UpdateMovieDto) {
    return this.moviesRepository.update(+id, updateMovieDto)
  }

  @Delete(':id')
  remove(@Param(':id') id: number) {
    return this.moviesRepository.remove(+id)
  }
}

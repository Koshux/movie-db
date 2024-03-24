import { Controller, Get, Query } from '@nestjs/common'
import { MoviesService } from './movies.service'

@Controller('movies')
export class MoviesController {
  constructor(private readonly moviesService: MoviesService) {}

  @Get()
  findAll(@Query('genre') genre: string) {
    return this.moviesService.findAll(genre)
  }
}

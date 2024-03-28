import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common'
import { MoviesService } from './movies.service'
import { CreateMovieDto } from './dto/create-movie.dto'
import { UpdateMovieDto } from './dto/update-movie.dto'

@Controller('movies')
export class MoviesController {
  constructor(private readonly moviesService: MoviesService) {}

  @Post()
  create(@Body() createMovieDto: CreateMovieDto) {
    return this.moviesService.create(createMovieDto)
  }

  @Get()
  findAll(
    @Query('page') page: string,
    @Query('limit') limit: string,
    @Query('filter') filter: string,
    @Query('sort') sort: string,
    @Query('include') include: string,
  ) {
    return this.moviesService.findAll({
      page,
      limit,
      filter,
      sort,
      include,
    })
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.moviesService.findOne(+id)
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMovieDto: UpdateMovieDto) {
    return this.moviesService.update(+id, updateMovieDto)
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.moviesService.remove(+id)
  }
}

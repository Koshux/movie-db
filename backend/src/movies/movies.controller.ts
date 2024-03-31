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
    @Query('search') search: string,
    @Query('genre') genre: string,
    @Query('limit') limit: string,
    @Query('sort') sort: string,
  ) {
    console.log('search', search)
    console.log('genre', genre)
    const limitNumber = limit ? parseInt(limit, 10) : 10

    return this.moviesService.findAll({
      search,
      genre,
      limit: limitNumber,
      sort
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

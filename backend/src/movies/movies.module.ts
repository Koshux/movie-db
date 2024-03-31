import { Module } from '@nestjs/common'
import { MoviesService } from './movies.service'
import { MoviesController } from './movies.controller'
import { SequelizeModule } from '@nestjs/sequelize'
import Movie from 'src/models/movie.model'
import { MoviesRepository } from './movies.repository'
import { MovieGenre } from 'src/models/movie-genre.model'
import { SequelizeQueryUtil } from 'src/common/sequlize-query.util'

@Module({
  imports: [SequelizeModule.forFeature([Movie, MovieGenre])],
  controllers: [MoviesController],
  providers: [MoviesService, MoviesRepository, SequelizeQueryUtil],
})
export class MoviesModule {}

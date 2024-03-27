import { Module } from '@nestjs/common'
import { MoviesService } from './movies.service'
import { MoviesController } from './movies.controller'
import { SequelizeModule } from '@nestjs/sequelize'
import Movie from 'src/models/movie'
import { MoviesRepository } from './movies.repository'
import { MovieGenre } from 'src/models/movie-genre'

@Module({
  imports: [SequelizeModule.forFeature([Movie, MovieGenre])],
  controllers: [MoviesController],
  providers: [MoviesService, MoviesRepository],
})
export class MoviesModule {}

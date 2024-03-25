import { Module } from '@nestjs/common'
import { MoviesService } from './movies.service'
import { MoviesController } from './movies.controller'
import { SequelizeModule } from '@nestjs/sequelize'
import Movie from 'src/models/movie'
import { MoviesRepository } from './movies.repository'

@Module({
  imports: [SequelizeModule.forFeature([Movie])],
  controllers: [MoviesController],
  providers: [MoviesService, MoviesRepository],
})
export class MoviesModule {}

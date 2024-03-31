import { Module } from '@nestjs/common'
import { GenresService } from './genres.service'
import { GenresController } from './genres.controller'
import { GenresRepository } from './genres.repository'
import { SequelizeModule } from '@nestjs/sequelize'
import Genre from 'src/models/genre.model'
import { MovieGenre } from 'src/models/movie-genre.model'

@Module({
  imports: [SequelizeModule.forFeature([Genre, MovieGenre])],
  controllers: [GenresController],
  providers: [GenresService, GenresRepository],
})
export class GenresModule {}

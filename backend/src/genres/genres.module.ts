import { Module } from '@nestjs/common'
import { GenresService } from './genres.service'
import { GenresController } from './genres.controller'
import { GenresRepository } from './genres.repository'
import { SequelizeModule } from '@nestjs/sequelize'
import Genre from 'src/models/genre'

@Module({
  imports: [SequelizeModule.forFeature([Genre])],
  controllers: [GenresController],
  providers: [GenresService, GenresRepository],
})
export class GenresModule {}

import { Module } from '@nestjs/common'
import { HttpModule } from '@nestjs/axios'
import { SequelizeModule } from '@nestjs/sequelize'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { dataBaseConfig } from './config/database.config'
import { GenresModule } from './genres/genres.module'
import { MoviesModule } from './movies/movies.module'
import { TmdbService } from './tmdb/tmdb.service'

const dotenv = require('dotenv')
dotenv.config()

@Module({
  imports: [
    SequelizeModule.forRoot(dataBaseConfig),
    MoviesModule,
    GenresModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule {}

import * as path from 'path'
import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { SequelizeModule } from '@nestjs/sequelize'
import { GenresModule } from './genres/genres.module'
import { MoviesModule } from './movies/movies.module'
import { dataBaseConfig } from './config/database.config'
const dotenv = require('dotenv')
dotenv.config()
console.log('process.env.DB_PATH', process.env.DB_PATH)

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

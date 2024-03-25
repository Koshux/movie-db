import * as path from 'path'
import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { SequelizeModule } from '@nestjs/sequelize'
import { GenresModule } from './genres/genres.module'
import { MoviesModule } from './movies/movies.module'
console.log('path', path.join(__dirname, '../src', 'movies.sqlite'));

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'sqlite',
      host: 'localhost',
      storage: path.join(__dirname, '../src', 'movies.sqlite'),
      autoLoadModels: true,
      synchronize: true,
      logging: true,
    }),
    MoviesModule,
    GenresModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule {}

import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { SequelizeModule } from '@nestjs/sequelize'
import { GenresModule } from './genres/genres.module'
import { MoviesModule } from './movies/movies.module'
import Movie from './models/movie'
import Genre from './models/genre'

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'sqlite',
      host: './movies.sqlite',
      models: [Movie, Genre],
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

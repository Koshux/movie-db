import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { MoviesModule } from './movies/movies.module'
import { SequelizeModule } from '@nestjs/sequelize'
import Movie from './models/movie'

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'sqlite',
      host: './movies.sqlite',
      models: [Movie],
      autoLoadModels: true,
      synchronize: true,
    }),
    MoviesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/sequelize'
import Movie from '../models/movie'

@Injectable()
export class MoviesService {
  constructor(
    @InjectModel(Movie)
    private movieModel: typeof Movie
  ) {}

  async findAll(genre?: string): Promise<Movie[]> {
    let options = {}

    if (genre) {
      options = {
        where: { genre }
      }
    }

    return this.movieModel.findAll(options)
  }
}

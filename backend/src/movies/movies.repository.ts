import { Delete, Get, Injectable, Patch, Post } from "@nestjs/common";
import Movie from "src/models/movie";
import { CreateMovieDto } from "./dto/create-movie.dto";
import { UpdateMovieDto } from "./dto/update-movie.dto";
import { InjectModel } from "@nestjs/sequelize";

@Injectable()
export class MoviesRepository {
  constructor(
    @InjectModel(Movie)
    private movieModel: typeof Movie
  ) {}

  async create(createMovieDto: CreateMovieDto): Promise<Movie> {
    return this.movieModel.create(createMovieDto as any)
  }

  async findAll(genre?: string): Promise<Movie[]> {
    let options = genre ? { where: { genre } } : {}

    return this.movieModel.findAll(options)
  }

  async findOne(id: number): Promise<Movie> {
    return this.movieModel.findByPk(id)
  }

  async update(id: number, updateMovieDto: UpdateMovieDto): Promise<[number]> {
    return this.movieModel.update(updateMovieDto, { where: { id } })
  }

  async remove(id: number): Promise<number> {
    return this.movieModel.destroy({ where: { id } })
  }
}

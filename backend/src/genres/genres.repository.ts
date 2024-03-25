import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import Genre from "src/models/genre";
import { CreateGenreDto } from "./dto/create-genre.dto";
import { UpdateGenreDto } from "./dto/update-genre.dto";

@Injectable()
export class GenresRepository {
  constructor(
    @InjectModel(Genre)
    private genreModel: typeof Genre
  ) {}

  async create(createGenreDto: CreateGenreDto): Promise<Genre> {
    return this.genreModel.create(createGenreDto as any)
  }

  async findAll(name?: string): Promise<Genre[]> {
    let options = name ? { where: { name } } : {}
    return this.genreModel.findAll(options)
  }

  async findOne(id: number): Promise<Genre> {
    return this.genreModel.findByPk(id)
  }

  async update(id: number, updateGenreDto: UpdateGenreDto): Promise<[number]> {
    return this.genreModel.update(updateGenreDto, { where: { id } })
  }

  async remove(id: number): Promise<number> {
    return this.genreModel.destroy({ where: { id } })
  }
}

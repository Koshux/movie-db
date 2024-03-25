import { Injectable } from '@nestjs/common'
import { CreateGenreDto } from './dto/create-genre.dto'
import { UpdateGenreDto } from './dto/update-genre.dto'
import { GenresRepository } from './genres.repository'
import Genre from 'src/models/genre'

@Injectable()
export class GenresService {
  constructor(
    private readonly genresRepository: GenresRepository
  ) {}

  create(createGenreDto: CreateGenreDto) {
    return this.genresRepository.create(createGenreDto)
  }

  findAll(name?: string) {
    return this.genresRepository.findAll()
  }

  findOne(id: number) {
    return this.genresRepository.findOne(id)
  }

  update(id: number, updateGenreDto: UpdateGenreDto) {
    return this.genresRepository.update(+id, updateGenreDto)
  }

  remove(id: number) {
    return this.genresRepository.remove(+id)
  }
}

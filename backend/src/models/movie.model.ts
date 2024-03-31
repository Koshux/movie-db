import {
  AutoIncrement,
  BelongsToMany,
  Column,
  DataType,
  Model,
  PrimaryKey,
  Table
} from 'sequelize-typescript'
import Genre from './genre.model'
import { MovieGenre } from './movie-genre.model'

@Table({ tableName: 'Movies' })
class Movie extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
    primaryKey: true,
  })
  id: number

  @Column(DataType.BOOLEAN)
  adult: boolean

  @Column(DataType.STRING)
  backdrop_path: string

  @Column(DataType.STRING)
  original_language: string

  @Column(DataType.STRING)
  original_title: string

  @Column(DataType.TEXT)
  overview: string

  @Column(DataType.FLOAT)
  popularity: number

  @Column(DataType.STRING)
  poster_path: string

  @Column(DataType.DATEONLY)
  release_date: string

  @Column(DataType.STRING)
  title: string

  @Column(DataType.BOOLEAN)
  video: boolean

  @Column(DataType.FLOAT)
  vote_average: number

  @Column(DataType.INTEGER)
  vote_count: number

  @BelongsToMany(() => Genre, () => MovieGenre)
  genres: Genre[]
}

export default Movie

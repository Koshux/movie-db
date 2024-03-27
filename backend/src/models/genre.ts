import {
  AutoIncrement,
  BelongsToMany,
  Column,
  DataType,
  Model,
  PrimaryKey,
  Table
} from 'sequelize-typescript'
import Movie from './movie'
import { MovieGenre } from './movie-genre'

@Table({ tableName: 'Genres' })
export default class Genre extends Model<Genre> {
  @PrimaryKey
  @AutoIncrement
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
    primaryKey: true,
  })
  id: number

  @Column({
    type: DataType.STRING,
    allowNull: false
  })
  name: string

  @BelongsToMany(() => Movie, () => MovieGenre)
  movies: Movie[]
}

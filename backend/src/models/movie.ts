import {
  AutoIncrement,
  Column,
  DataType,
  HasMany,
  Model,
  PrimaryKey,
  Table
} from 'sequelize-typescript'
import Genre from './genre'

@Table({ tableName: 'Movies' })
class Movie extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column(DataType.INTEGER)
  id: number

  @Column(DataType.STRING)
  title: string

  @Column(DataType.STRING)
  genre: string

  @Column(DataType.INTEGER)
  year: number

  @HasMany(() => Genre)
  genres: Genre[]
}

export default Movie

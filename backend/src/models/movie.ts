import {
  AutoIncrement,
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
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

  @Column(DataType.INTEGER)
  year: number

  @ForeignKey(() => Genre)
  @Column(DataType.INTEGER)
  genreId: number

  @BelongsTo(() => Genre)
  genre: Genre
}

export default Movie

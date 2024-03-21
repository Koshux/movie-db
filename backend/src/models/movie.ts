import {
  AutoIncrement,
  Column,
  DataType,
  Model,
  PrimaryKey,
  Table
} from 'sequelize-typescript'

@Table
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
}

export default Movie

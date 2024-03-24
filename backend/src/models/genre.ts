import { AutoIncrement, BelongsTo, Column, DataType, ForeignKey, Model, PrimaryKey, Table } from 'sequelize-typescript'
import Movie from './movie'

@Table({ tableName: 'Genres' })
export default class Genre extends Model<Genre> {
  @PrimaryKey
  @AutoIncrement
  @Column(DataType.INTEGER)
  id: number

  @Column({
    type: DataType.STRING,
    allowNull: false
  })
  name: string

  @ForeignKey(() => Movie)
  @Column(DataType.INTEGER)
  movieId: number

  @BelongsTo(() => Movie)
  movie: Movie
}

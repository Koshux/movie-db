import { AutoIncrement, BelongsTo, Column, DataType, ForeignKey, HasMany, Model, PrimaryKey, Table } from 'sequelize-typescript'
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

  @HasMany(() => Movie)
  movies: Movie[]
}

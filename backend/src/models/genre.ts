import { AutoIncrement, Column, DataType, Model, PrimaryKey, Table } from 'sequelize-typescript'

@Table
class Genre extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column(DataType.INTEGER)
  id: number

  @Column(DataType.STRING)
  name: string
}

export default Genre

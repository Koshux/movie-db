import { Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import Movie from "./movie";
import Genre from "./genre";

@Table({ tableName: 'MovieGenres' })
export class MovieGenre extends Model<MovieGenre> {
  @ForeignKey(() => Movie)
  @Column(DataType.INTEGER)
  movieId: number

  @ForeignKey(() => Genre)
  @Column(DataType.INTEGER)
  genreId: number
}

import { DataTypes, Model } from 'sequelize'
import sequelize from '../index'

class Movie extends Model {}

Movie.init({
  title: DataTypes.STRING,
  genre: DataTypes.STRING,
  year: DataTypes.INTEGER
}, {
  sequelize,
  modelName: 'Movie'
})

export default Movie

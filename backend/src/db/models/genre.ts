import { DataTypes, Model } from 'sequelize'
import sequelize from '../index'

class Genre extends Model {}

Genre.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  name: DataTypes.STRING
}, {
  sequelize,
  modelName: 'Genre'
})

export default Genre

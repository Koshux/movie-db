import { Sequelize } from 'sequelize-typescript'
import Movie from './movie'

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: 'C://Users//james//Documents//GitHub//movie-db//backend//src//movies.sqlite',
  models: [Movie]
})

export default sequelize

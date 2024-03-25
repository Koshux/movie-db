import * as path from 'path'
import { Sequelize } from 'sequelize-typescript'
import Movie from './movie'

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: path.join(__dirname, 'src', 'movies.sqlite'),
  // C://Users//james//Documents//GitHub//movie-db//backend//src//movies.sqlite',
  models: [Movie]
})

console.log('sequelize', sequelize)
console.log('path', path.join(__dirname, 'src', 'movies.sqlite'));

export default sequelize

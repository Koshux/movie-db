import { Sequelize } from 'sequelize'

// const sequelize = new Sequelize({
//   dialect: 'sqlite',
//   storage: 'C://Users//james//Documents//GitHub//movie-db//backend//src//db/movies.sqlite'
// })

const sequelize = new Sequelize("sqlite::memory:")

export default sequelize

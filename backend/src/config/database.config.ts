const dotenv = require('dotenv')
dotenv.config()
console.log('database config path', process.env.DB_PATH)
import { SequelizeModuleOptions } from '@nestjs/sequelize'

export const dataBaseConfig: SequelizeModuleOptions = {
  dialect: 'sqlite',
  storage: process.env.DB_PATH,
  autoLoadModels: true,
  synchronize: false,
  logging: true,
}

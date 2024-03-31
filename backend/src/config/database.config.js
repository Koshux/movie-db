const dotenv = require('dotenv')
dotenv.config()

module.exports = {
  "development": {
    "dialect": "sqlite",
    "storage": process.env.DB_PATH,
    logging: console.log
  },
  "test": {
    "dialect": "sqlite",
    "storage": ":memory:"
  },
  // "production": {
  //   "dialect": "sqlite",
  //   "storage": "../movies.sqlite",
  //   logging: console.log
  // }
}

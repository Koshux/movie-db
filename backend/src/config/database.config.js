module.exports = {
  "development": {
    "dialect": "sqlite",
    "storage": "../movies.sqlite",
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

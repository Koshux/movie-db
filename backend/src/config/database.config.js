module.exports = {
  "development": {
    "dialect": "sqlite",
    "storage": "../movies.sqlite"
  },
  "test": {
    "dialect": "sqlite",
    "storage": ":memory:"
  },
  "production": {
    "dialect": "sqlite",
    "storage": "../movies.sqlite"
  }
}

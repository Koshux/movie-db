# Movie Library API

## Introduction

This project is the backend for a Movie Library application, designed as a test task for an interview. It's built using NestJS and interfaces with a SQLite database for storing movie and genre information. Additionally, it can act as a gateway to The Movie Database (TMDb) for fetching and seeding movie data.

## Features

- CRUD operations for movies and genres
- Filtering movies by title and genre
- Sorting movies by popularity or vote average
- Authentication and authorization (optional implementation)
- Integration with TMDb API for real-time movie data (optional)

## Getting Started

### Prerequisites

- Node.js (version 12 or later)
- npm or yarn
- SQLite (for local development)

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
```

2. Install dependencies:

```bash
cd movie-library-backend
npm install
```

3. Set up environment variables:

   Copy `.env.example` to `.env` and fill in the necessary details like database connection and TMDb API key.
   - DB_PATH=<path/to/SQLite/database/file.sqlite3>
   - MOVIE_DB_API_KEY=<themoviedb.org API key>
   - MOVIE_DB_API_READ_ACCESS_TOKEN=<themoviedb.org API read access token>


## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

### API Endpoints

- `GET /movies`: Fetch a list of movies, optionally filtered by title and genre.
- `POST /movies`: Add a new movie to the database.
- `GET /movies/:id`: Get details about a specific movie.
- `PUT /movies/:id`: Update details of an existing movie.
- `DELETE /movies/:id`: Remove a movie from the database.
- `GET /genres`: Fetch a list of genres.

## Deployment

The application is containerized for easy deployment. Steps for deploying to Heroku or any other cloud service are as follows:

1. Build the Docker image:

   ```
   docker build -t movie-library-backend .
   ```

2. Push the image to a container registry (e.g., Docker Hub, Heroku Container Registry).

3. Deploy the image to your preferred cloud service following their specific instructions.

## Future Enhancements

- Implement JWT-based authentication for protected routes.
- Extend TMDb integration to sync the latest movies periodically.
- Optimize database queries for performance improvements.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request with your proposed changes.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

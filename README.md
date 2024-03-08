# Movie Library Application

This repository contains the code for both the frontend and backend of the Movie Library application, a full-stack project built with React, Redux Toolkit, Express, and Sequelize.

## Prerequisites

- Node.js (v14 or later)
- npm or yarn
- Docker (for containerization)
- Docker Compose (for running multi-container Docker applications)

## Setup and Installation

### Backend

1. Navigate to the `backend` directory.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Copy `.env.example` to `.env` and update the environment variables according to your setup.
4. Run migrations and seeders (if applicable):
   ```bash
   npx sequelize db:migrate
   npx sequelize db:seed:all
   ```
5. Start the backend server:
   ```bash
   npm start
   ```

### Frontend

1. Navigate to the `frontend` directory.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Copy `.env.example` to `.env` and update the environment variables (e.g., the backend API URL).
4. Start the React development server:
   ```bash
   npm start
   ```

## Running with Docker

This project supports Docker for easy setup and deployment. Ensure Docker and Docker Compose are installed on your system.

1. From the root of the project, build and start the containers:
   ```bash
   docker-compose up --build
   ```
2. Access the application at `http://localhost` (or another port configured in `docker-compose.yml`).

## Contributing

Contributions are welcome! Please read the contributing guidelines and code of conduct before making a pull request.

## License

This project is licensed under the MIT License - see the LICENSE.md file for details.

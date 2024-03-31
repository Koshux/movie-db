# Movie Library Frontend

## Introduction

This is the frontend for the Movie Library application, built with React and Chakra UI. It's designed to interface with the Movie Library API, allowing users to browse, search, and filter movies by genre. The application is responsive, ensuring a smooth user experience across various devices.

## Features

- Display movies in a carousel and grid layout
- Search for movies by title
- Filter movies by genre
- Responsive design for mobile, tablet, and desktop
- Integration with the backend Movie Library API

## Getting Started

### Prerequisites

- Node.js (version 12 or later)
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
```

2. Navigate to the frontend directory:

```bash
cd movie-library-frontend
```

3. Install dependencies:

```bash
npm install
```

4. Run the application:

```bash
npm start
```

   This will launch the app in development mode, accessible at `http://localhost:3000`.

### Environment Variables

Before starting the app, you may need to set up environment variables for API endpoints or other configuration settings. Create a `.env` file in the root of your frontend directory and specify your API base URL:

```
REACT_APP_API_BASE_URL=http://localhost:4000/api
```

Adjust the port number as necessary to match your backend configuration.

## Deployment

This application is set up for easy deployment to GitHub Pages. To deploy:

1. Build the static files:

   ```
   npm run build
   ```

2. Deploy to GitHub Pages:

   ```
   npm run deploy
   ```

## Future Enhancements

- Implement user authentication and personal watchlists.
- Add movie ratings and reviews feature.
- Improve accessibility and internationalization support.

## Contributing

We welcome contributions to improve this project. Please feel free to submit issues or pull requests with your suggestions or improvements.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

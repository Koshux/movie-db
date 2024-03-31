## Introduction

This document serves as a reflection on the development of the Movie Library app, outlining my experiences, the challenges I faced, and areas where the app can be improved. This project was developed to test out the latest versions of React, Chakra UI, NestJS, and integrating external APIs like TMDb.

## Achievements

- Successfully implemented a responsive frontend with React and Chakra UI, providing a user-friendly interface for movie browsing.
- Integrated the frontend with a NestJS backend.
- Utilized Redux Toolkit for state management, enhancing the app's scalability and maintainability.
- Achieved dynamic movie filtering by genre and search term, improving the user experience.
- Implemented a carousel and grid layout for displaying movies, enhancing the visual appeal of the app.
- Integrated NestJS with SQLite for storing movie and genre data, enabling CRUD operations.

## Challenges Encountered

- **Backend Integration**: Setting up the API without NestJS was relatively straight forward but I preferred to try out NestJS. Migrating was relatively smooth but it required some additional learning around relationship retrieval. As it stands, it could be improved with more complex queries.
- **Responsive Design**: While Chakra UI greatly facilitated responsive design, fine-tuning the UI for an optimal user experience across devices required meticulous adjustments.

## Areas for Improvement

- **Accessibility and Internationalization**: Making the app more accessible to users with disabilities and supporting multiple languages can broaden the app's user base.
- **Error Handling and Feedback**: Enhancing error handling and providing meaningful feedback to users can improve the app's usability and user satisfaction.
- **User Experience Enhancements**: Implementing features like infinite scrolling, lazy loading, and pagination can enhance the user experience and reduce load times.
- **Improved UI/UX**: Enhancing the UI with animations, transitions, and more engaging design elements can make the app more visually appealing and engaging.
- **Performance Optimization**: Further optimizations can be made, particularly in how movie data is fetched and displayed, to improve the app's performance, especially on lower-end devices.

## MINI PROJECT | Studio Ghibli Movie Database

![Game Logo](src/assets/chihiro015.jpeg)


This project is a React-based web application that serves as a movie database for Studio Ghibli films. It utilizes data fetched from the Studio Ghibli API to display information about each movie, allows users to leave reviews, and offers features such as user authentication and favorites management.


## Main Functionalities (MVP)

The web app encompasses several key functionalities to provide an immersive and enjoyable experience:

- **User Authentication:** Users can sign up, sign in, and log out securely using a custom backend server to store user-related data.
- **Movie Listings:** Displays a list of Studio Ghibli movies with options to search for specific titles or browse randomly selected movies.
- **Movie Details:** Provides detailed information about each movie, including title, description, director, producer, release date, running time, and rating.
- **Reviews:** Users can leave reviews for movies, which are displayed alongside movie details.
- **Favorites Management:** Allows users to save movies to their favorites list and remove them if desired.
- **Dashboard:** Users can view their profile information, favorite movies, and reviews they've left.
- **Responsive Design:** Ensures a seamless user experience across various devices.
- **About Studio Ghibli Page:** Learn more about Studio Ghibli and its history.
- **Sign Up, Sign In, and Sign Out Pages:** User authentication functionality with secure password hashing.

<br>

## Backlog Functionalities

- Create "Watch later" functionality to allow users, to save movies on a list.

## Technologies Used

<h3>Frontend</h3>
The frontend of this project is built using React.js, a popular JavaScript library for building user interfaces. Key components and pages include:

- **App.jsx:** Main entry point for the React application, managing routing and user authentication state.
- **Navbar.jsx:** Navigation bar component dynamically adapting based on the user's authentication status.
- **HomePage.jsx:** Landing page introducing users to Studio Ghibli and inviting exploration of its films.
- **MovieList.jsx:** Component displaying a searchable list of Studio Ghibli movies, allowing users to browse and explore.
- **MovieDetailsPage.jsx:** Component presenting detailed information about a specific movie, including its description, director, producer, and release date.
- **About.jsx:** Component providing background information about Studio Ghibli, its founders, and its cultural impact.
- **Dashboard.jsx:** Component showcasing user-specific data such as favorite movies and submitted reviews.
- **ReviewForm.jsx:** Form component allowing users to submit reviews for movies, including title and content.
- **SignInPage.jsx:** Page for user authentication, allowing users to sign in with their credentials.
- **Register.jsx:** Page for user registration, allowing new users to create accounts.
- **Logout.jsx:** Component for user logout functionality.

<h3>Backend</h3>
The project integrates with a custom backend to store user-related data, including user profiles, favorite movies, and reviews. Additionally, it interacts with an external API to fetch information about Studio Ghibli movies.

<h4>Dependencies<h4>
Production Dependencies: <br><br>

- @emotion/react: ^11.11.3
- @emotion/styled: ^11.11.0
- @mui/icons-material: ^5.15.9
- @mui/material: ^5.15.9
- axios: ^1.6.7
- bcryptjs-react: ^2.4.6
- react: ^18.2.0
- react-dom: ^18.2.0
- react-router-dom: ^6.22.0 <br><br>

Development Dependencies: <br>

- @types/react: ^18.2.55
- @types/react-dom: ^18.2.19
- @vitejs/plugin-react: ^4.2.1
- eslint: ^8.56.0
- eslint-plugin-react: ^7.33.2
- eslint-plugin-react-hooks: ^4.6.0
- eslint-plugin-react-refresh: ^0.4.5
- vite: ^5.1.0

## Project Structure

- node_modules
- public
  - vite.svg
- src
  - assets
  - components
    - Loading.jsx
    - Loading.module.css
    - MovieList.jsx
    - MovieList.module.css
    - Navbar.jsx
    - Navbar.module.css
    - ReviewForm.jsx
    - ReviewForm.module.css
  - hooks
    - useAuth.js
  - pages
    - About.jsx
    - Dashboard.jsx
    - Dashboard.module.css
    - HomePage.jsx
    - MovieDetailsPage.jsx
    - MovieDetailsPage.module.css
    - NotFoundPage.jsx
    - SignInPage.jsx
    - SignOutPage.jsx
    - SignUpPage.jsx
  - App.css
  - App.jsx
  - index.css
  - main.jsx
- .env
- eslintrc.cjs
- .gitignore
- index.html
- package.json
- package-lock.json
- README.md
- vite.config.js


## Extra Links

<h3>Deploy</h3>
*not deployed yet*

## Credits

All images are from the Studio Ghibli Collection. <br>
Feel free to modify and extend the game as needed. <br>


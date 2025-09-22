# User Management Dashboard

## Project Overview
This React application serves as a User Management Dashboard. It enables users to view, search, filter, add, edit, and delete user records. Data is stored locally using the browser's localStorage, removing the need for a backend. The application is designed to be responsive to ensure accessibility across all device types.

## Features
- Display a list of users with details like name, email, department, and role.
- Search users by name or email using case-insensitive matching.
- Filter users by department and role for easy navigation.
- Add new users through a clean and simple form.
- Edit and update user details seamlessly.
- Delete users with confirmation to prevent accidental removals.
- Control pagination with adjustable page size.
- Fully responsive design to support mobile, tablet, and desktop use.

## Technology Stack
- React for building user interface components.
- React Router for smooth navigation between views.
- JavaScript ES6+ features for modern coding practices.
- CSS Flexbox and Grid layouts for responsive design.
- Browser localStorage API for persistent client-side data.
- Git for version control and collaboration.

## Project Structure
- `src/components`: Contains reusable UI components such as SearchBar, UserCard, and FilterSidebar.
- `src/pages`: Includes main page components such as UserDirectoryPage and UserFormPage.
- `src/services`: Handles data persistence logic and interaction with localStorage.
- `src/utils`: Utility functions including validation logic.
- `src/styles.css`: Contains styling and responsive design CSS.

## Setup Instructions

1. Clone the repository:

git clone <repository-url>


2. Navigate into the project directory:

cd user-management-app


3. Install necessary dependencies:

npm install

## Run Instructions

Start the application locally by running:

npm start


Once the server starts, open your browser and visit `http://localhost:3000`.

## Reflections

- This project reinforced my understanding of React functional components and state management using hooks.
- Implementing client-side persistence with localStorage helped me grasp practical data storage techniques without backend complexity.
- The implementation of search, filtering, and pagination provided useful insights into managing component state and performance.
- Building a responsive UI enhanced my CSS skills, specifically with Flexbox and Grid layouts.
- Structuring the app into modular components improved code reusability and maintainability.
- Encountering and resolving issues with React Router deepened my routing and navigation knowledge.


## Future Improvements
- Integrate a backend API with a database to store user data persistently.
- Add user authentication and role-based access control.
- Implement more robust form validation with user-friendly error messages.
- Include unit and integration testing for components and services.
- Enhance the UI with animations and improved accessibility support.

Feel free to contribute, suggest improvements, or report issues!

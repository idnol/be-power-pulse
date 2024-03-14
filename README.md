# PowerPulse Server
Welcome to the server repository for PowerPulse, a responsive web application designed to track and support users' fitness and nutrition journey. This README will guide you through the structure, endpoints, and technologies used in this version.

## Structure
The server is structured around various endpoints that handle different functionalities of the application. Here are the main routes:

### /users: Manages user-related operations such as
      /users/register: Register a new user.
      /users/login: User login.
      /users/logout: User logout.
      /users/current: Get current user information.
      /users/profile: Update user profile.
      /users/avatar: Update user avatar.
    
### /diaries: Manages diary entries, including consumed products and performed exercises.
     /diaries: Get diary entries for a specific date.
     /diaries/product: Add or remove a product from the diary.
     /diaries/exercise: Add or remove an exercise from the diary.

### /exercises: Retrieves exercise data.
      /exercises: Get all existing exercises in the application.
      /exercises/filters: Get exercise categories for different body parts.
      
### /products: Retrieves product data.
      /products: Get a list of all products.
      /products/categories: Get product lists categorized.
      
Each route is associated with specific functionalities and guarded by authentication middleware.

## Technologies
The backend is built using the following technologies:
    Express.js: Web application framework for Node.js.
    Morgan: HTTP request logger middleware.
    Cors: Cross-Origin Resource Sharing middleware.
    MongoDB: NoSQL database for data storage.
    Mongoose: MongoDB object modeling for Node.js.
    Swagger UI Express: Documentation tool for API endpoints.
    
## Initial Setup
To set up the backend, follow these steps:
    Install dependencies using npm install.
    Configure environment variables as .env.example.
    Initialize and connect to MongoDB.
    Implement error handling and HTTP status responses.
    Deploy the backend to a hosting service.

## Documentation
The API endpoints are documented using Swagger UI Express. Access the documentation at /api-docs route.

## Authentication and Authorization
The server implements token-based authentication for secure user access. Private endpoints require authentication for access, ensuring protection of user data and resources.

## BMR Calculation
The server includes functionality to calculate Basal Metabolic Rate (BMR) based on user characteristics such as weight, height, age, and activity level. The calculated BMR is used to derive recommendations for calorie intake and exercise time for users.

## Initial Requirements
The backend was developed based on the initial technical specifications provided in the project requirements. These specifications include deployment, documentation, authentication, BMR calculation, and various endpoints for user management, diary entries, nutrition, exercises, and statistics.

Feel free to reach out for any further assistance or inquiries. Happy coding!

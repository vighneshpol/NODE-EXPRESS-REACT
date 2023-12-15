### Backend API for CRUD Operations
This backend API serves as a simple CRUD (Create, Read, Update, Delete) system built with Express and PostgreSQL for managing user data.

Getting Started:

## Prerequisites
Node.js installed on your machine
PostgreSQL database setup


### Installation
Clone this repository.
Navigate to the project directory in your terminal.
Run npm install to install the required dependencies.
Configure your PostgreSQL database connection by setting up environment variables or directly editing the pool configuration in server.js.
Running the Server
Run npm start to start the server on the specified port (default is 5000).
The server will run locally at http://localhost:5000/.

## Available Endpoints:
`POST /users`: Add a new user.
`GET /users`: Retrieve all users.
`PUT /users/:id`: Update user details by ID.
`DELETE /users/:id`: Delete a user by ID.

Usage:
1. Adding a New User
Send a POST request to /users with JSON data containing name, phoneNumber, email, and hobbies.
Example: `curl -X POST -H "Content-Type: application/json" -d "{\"name\":\"John Doe\",\"phoneNumber\":\"1234567890\",\"email\":\"john@example.com\",\"hobbies\":\"Reading\"}" http://localhost:5000/users`


2. Retrieving Users
Send a GET request to /users to fetch all users.
Example: `curl http://localhost:5000/users`

3. Updating User Details
Send a PUT request to /users/:id with JSON data containing fields to update.
Example: `curl -X PUT -H "Content-Type: application/json" -d "{"name":"Updated Name"}" http://localhost:5000/users/1`

4.Deleting a User:
Send a DELETE request to /users/:id to delete a user by ID.
Example: `curl -X DELETE http://localhost:5000/users/1`


### Error Handling

The API returns appropriate HTTP status codes and error messages for various scenarios, including server errors and missing fields during user creation.

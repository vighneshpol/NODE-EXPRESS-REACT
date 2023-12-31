# NODE-EXPRESS-REACT

## Steps to Run This Application:
The client folder represents the frontend part of the application, while the server folder signifies the backend.

1. Clone the repository to your local machine.
2. Navigate to the project directory (NODE-EXPRESS-REACT) in your terminal.
3. Run npm install to install the required dependencies in both the client and server directories.
4. Configure your PostgreSQL database connection either by setting up environment variables or directly editing the pool configuration in server.js.

## Frontend:
Go to the client directory and run npm start. This will open the client in your default browser.
Local: http://localhost:3000

## PostgreSQL (Database):
  user: 'postgres',
  host: 'localhost',
  database: 'postgres',
  password: 'admin',
  port: 5432, // Default PostgreSQL port

## Backend:
Go to the server directory and run npm start. Access the server at port 5000:
`http://localhost:5000`
Success message: Server is running on port 5000

## Available Endpoints:
GET /users: Retrieve all users.
POST /users: Add a new user.
PUT /users/:id: Update user details by ID.
DELETE /users/:id: Delete a user by ID.

## Usage:
1. Adding a New User
Send a POST request to /users with JSON data containing name, phoneNumber, email, and hobbies.
Example: `curl -X POST -H "Content-Type: application/json" -d "{\"name\":\"John Doe\",\"phoneNumber\":\"1234567890\",\"email\":\"john@example.com\",\"hobbies\":\"Reading\"}" http://localhost:5000/users`


2. Retrieving Users
Send a GET request to /users to fetch all users.
Example: `curl http://localhost:5000/users`

3. Updating User Details
Send a PUT request to /users/:id with JSON data containing fields to update.
Example: `curl -X PUT -H "Content-Type: application/json" -d "{"name":"Updated Name"}" http://localhost:5000/users/1`

4. Deleting a User:
Send a DELETE request to /users/:id to delete a user by ID.
Example: `curl -X DELETE http://localhost:5000/users/1`


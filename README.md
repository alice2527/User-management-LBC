# User-management-LBC

# Back-end
This project implements a REST API for user management using Spring Boot and the reactive paradigm. It connects to a SQL or NoSQL database and exposes endpoints to list all users and retrieve users by their unique identifiers.

## Features

- List all users: `GET /api/users`
- Get user by ID: `GET /api/users/{id}`

## Architecture

The project follows a three-layer architecture:
- **Presentation Layer:** Angular UI
- **Business Logic Layer:** Spring Boot REST API
- **Data Access Layer:** MySQL Database
## Getting Started

To run the project locally:

1. Clone this repository.
2. Set up the necessary database
3. Configure database settings in the application properties file.
4. Run the Spring Boot application.
5. Access the API endpoints using an HTTP client like Postman or integrate with the UI.


# User-management-LBC

# Back-end
This project implements a REST API for user management using Spring Boot and the reactive paradigm. It connects to a SQL or NoSQL database and exposes endpoints to list all users and retrieve users by their unique identifiers.

## Features

- List all users: `GET /api/user/list`
- Get user by ID: `GET /api/user/{id}`
- Create user:  `POST /api/user  {UserDTO}`
- Delete user: `DELETE /api/user/{id}`
## Architecture
### 3-tier Architecture

The three-tier architecture is a modular client-server setup comprising presentation, application, and data tiers. It enhances horizontal scalability, performance, and availability by separating responsibilities among tiers, allowing independent development by different teams using varied programming languages.


## Advantages
### Enhanced Data Integrity: 
Centralizing data updates in the second tier ensures only crucial data modifications, preventing potential corruption by unreliable client apps.

### Modular Scalability:
Easily scalable components leverage the architecture's modularity, improving system availability and robustness.


### Task Separation: 
Clear separation of tasks allows specialized handling by web designers, software engineers, and database administrators, streamlining development and management.


### Tier Independence: 
Each tier operates independently, facilitating updates or changes without system-wide impact.

## Disadvantages:
### Limited Agility: 
Agility and flexibility in updates are compromised, especially for mobile user needs and operational scalability.
### Complex Updates:
Altering any module requires rebuilding and testing the entire application, demanding substantial effort and time.

### Maintenance Challenges:
Monolithic code structures might increase maintenance complexity and effort.
### Lack of security:
The passwords are not encrypted and so everyone will be able to have access to them, plus these are also returned in the response.
### No test:
I should some test, In order to prevent bugs in advance or even for every person who want to try this app.
# Deployment Instructions

## Prerequisites

- Java Development Kit (JDK) 17 or later installed
- MySQL database instance available

## Steps to Deploy

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/yourusername/LBC_Back.git
2. **Database Configuration:**
-Ensure a MySQL database is available.
-Update the application.properties file  with database configuration:
 ```bash
spring.flyway.enabled=true
spring.flyway.url=jdbc:mysql://127.0.0.1:3306/user_db?useLegacyDatetimeCode=false&serverTimezone=Europe/Paris

spring.flyway.user=root
spring.flyway.password=Root123456
logging.level.org.springframework.flyway=DEBUG
spring.r2dbc.url=r2dbc:mysql://localhost:3306/user_db?useLegacyDatetimeCode=false&serverTimezone=Europe/Paris


spring.r2dbc.username=root
spring.r2dbc.password=Root123456
logging.level.io.r2dbc=DEBUG
3. **Build the Project:**
```bash
mvn clean package

3. **Run the Application:**

```bash
java -jar target/LBC_Back-0.0.1-SNAPSHOT.jar
``
4. **Access the Application:**
Once the application is running, access the API endpoints at http://localhost:8080/api/users


###Production
unfortunately I have never done docker, I am stuck at this step, I have added my various tests to you

### how you can improve it, using an other technology or an other pattern
Domain-Driven Design (DDD) diverges from the traditional three-tier architecture by prioritizing a deep understanding of the business domain. Unlike the layer-based structure of the three-tier model, DDD centers on a holistic and business-centric approach. By embracing DDD, teams gain a clearer insight into the complex business domain and foster a unified language shared by both technical and non-technical stakeholders. This approach promotes enhanced communication and a more accurate reflection of the business domain within the software. DDD's focus on bounded contexts enables better organization and delineation of distinct domains, reducing complexity and allowing independent development. Through defining aggregates, entities, and domain-driven patterns, DDD cultivates a cohesive, maintainable codebase that harmonizes with the intricacies of the business domain.

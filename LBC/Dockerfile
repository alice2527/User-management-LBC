# Use a base image with JDK and Maven installed
FROM maven:3.8.3-openjdk-17 AS build

# Set the working directory in the container
WORKDIR /app

# Copy the Maven project file and download dependencies
COPY pom.xml .
RUN mvn dependency:go-offline

# Copy the source code
COPY src ./src

# Build the application
RUN mvn package -DskipTests

# Use a base image with MySQL
FROM mysql:latest

# Set environment variables for MySQL configuration
ENV MYSQL_DATABASE=user_db
ENV MYSQL_USER=root
ENV MYSQL_PASSWORD=Root123456

# Create database and user
COPY ./sql-scripts/ /docker-entrypoint-initdb.d/

# Set the working directory in the container
WORKDIR /app

# Copy the JAR file from the build stage to the runtime image
COPY --from=build /app/target/LBC_Back-0.0.1-SNAPSHOT.jar ./app.jar

# Expose the port the app runs on
EXPOSE 8080

# Define the command to run the application when the container starts
CMD ["java", "-jar", "app.jar"]

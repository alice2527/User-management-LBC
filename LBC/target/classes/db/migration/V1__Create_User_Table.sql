CREATE TABLE users (
                       id BIGINT AUTO_INCREMENT PRIMARY KEY,
                       email VARCHAR(255) NOT NULL UNIQUE,
                       password VARCHAR(255) NOT NULL,
                       firstName VARCHAR(255) NOT NULL,
                       lastName VARCHAR(255) NOT NULL,
                       creationDate DATE NOT NULL,
                       role ENUM('ADMIN', 'USER') NOT NULL
);

DROP DATABASE IF EXISTS restaurant;
CREATE DATABASE restaurant;

USE restaurant;
CREATE TABLE reservations (
    table_id INT AUTO_INCREMENT NOT NULL,
    customerName VARCHAR(255) NOT NULL,
    customerEmail VARCHAR(255) NOT NULL,
    customerID VARCHAR(255) NOT NULL, 
    phoneNumber VARCHAR(255) NOT NULL,
    waitlist BOOLEAN DEFAULT false,
    primary key(table_id)
);


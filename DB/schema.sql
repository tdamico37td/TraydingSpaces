DROP DATABASE IF EXISTS friendlist;
CREATE DATABASE friendlist;
USE friendlist;
CREATE TABLE friendData (
    id VARCHAR(36) AUTO_INCREMENT NOT NULL,
    friendName VARCHAR(75) NOT NULL,
    phoneNumber VARCHAR(10) NOT NULL,
    quizScore INT NOT NULL, 
    primary key(user_id)
);


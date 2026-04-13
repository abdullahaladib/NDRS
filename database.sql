CREATE DATABASE NDRS;
use NDRS;

CREATE TABLE Admins (
    `Admin_ID` INT PRIMARY KEY AUTO_INCREMENT,
    `Username` VARCHAR(50) NOT NULL,
    `Email` VARCHAR(50) NOT NULL,
    `Password` VARCHAR(50) NOT NULL
);


CREATE TABLE Users (
    `User_ID` INT PRIMARY KEY AUTO_INCREMENT,
    `Name` VARCHAR(50) NOT NULL,
    `Email` VARCHAR(50) NOT NULL,
    `Password` VARCHAR(50) NOT NULL,
    `Phone` VARCHAR(15),
    `Address` VARCHAR(100)
);

CREATE TABLE RescueTeams (
    Team_ID INT PRIMARY KEY AUTO_INCREMENT,
    `Name` VARCHAR(50) NOT NULL,
    Task TEXT
);

CREATE TABLE Volunteers (
    `Volunteer_ID` INT PRIMARY KEY AUTO_INCREMENT,
    `User_ID` INT,
    `Team_ID` INT,
    `Skills` TEXT,
    `Availability` VARCHAR(50),
    `Prev_Exp` TEXT,
    FOREIGN KEY (User_ID) REFERENCES Users(User_ID),
    FOREIGN KEY (Team_ID) REFERENCES RescueTeams(Team_ID)
);


CREATE TABLE IncidentReports (
    `Report_ID` INT PRIMARY KEY AUTO_INCREMENT,
    `Type` VARCHAR(50) NOT NULL,
    `Details` TEXT,
    `Location` VARCHAR(50),
    `Time` DATETIME,
    `Status` VARCHAR(50),
    `Resource_Type` VARCHAR(50)
);


CREATE TABLE DisasterAlerts (
    `Alert_ID` INT PRIMARY KEY AUTO_INCREMENT,
    `Details` TEXT,
    `Location` VARCHAR(50),
    `Time` DATETIME,
    `Type` VARCHAR(50),
    `Severity` VARCHAR(50)
);

CREATE TABLE Donations (
    `Donation_ID` INT PRIMARY KEY AUTO_INCREMENT,
    `User_ID` INT,
    `Amount` INT,
    `Time` DATETIME,
    `Type` VARCHAR(50),
    FOREIGN KEY (User_ID) REFERENCES Users(User_ID)
);

INSERT INTO Admins (Username, Email, Password) VALUE ('admin', 'admin@ndrs.com', '123456');

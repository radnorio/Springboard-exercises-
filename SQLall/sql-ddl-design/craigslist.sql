DROP DATABASE IF EXISTS craigslist;
CREATE DATABASE craigslist;
\c air_traffic

CREATE TABLE Posts
(
    id SERIAL PRIMARY KEY,
    title VARCHAR(225) NOT NULL,
    pText VARCHAR(255) NOT NULL,
    category INT NOT NULL REFERENCES Subcategories(id) ON DELETE SET NULL,
    location INT NOT NULL REFERENCES Regions(id) ON DELETE SET NULL,
    posted_by INT NOT NULL REFERENCES Users(id) ON DELETE CASCADE
);
CREATE TABLE Regions
(
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL
);
CREATE TABLE Users
(
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    preferred_region INT REFERENCES Regions(id) ON DELETE SET NULL
);
CREATE TABLE Subcategories
(
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
);
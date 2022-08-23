DROP DATABASE IF EXISTS league;
CREATE DATABASE league;
\c league

CREATE TABLE Teams
(
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    players REFERENCES Players(id)
);
CREATE TABLE Players
(
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    team TEXT NOT NULL,
);
CREATE TABLE Games
(
    id SERIAL PRIMARY KEY,
    gameDay DATE,
    homeTeam INT NULL REFERENCES Teams(id),
    awayTeam INT NULL REFERENCES Teams(id),
    goals TEXT[] NOT NULL,
    referees REFERENCES Referees(id)
)
CREATE TABLE Goals
(
    id SERIAL PRIMARY KEY,
    match INT NOT NULL REFERENCES Games(id) ON DELETE CASCADE,
    player INT REFERENCES Players(id) ON DELETE SET NULL,
    team INT NOT NULL REFERENCES Teams(id)  ON DELETE SET NULL
);
CREATE TABLE Referees
(
    id SERIAL PRIMARY KEY,
    first_name TEXT NOT NULL,
    last_name TEXT NOT NULL
);
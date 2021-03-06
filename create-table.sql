DROP TABLE IF EXISTS users;

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    firstname VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    nativelang1 VARCHAR(255) NOT NULL,
    nativelang2 VARCHAR(255),
    nativelang3 VARCHAR(255),
    targetlang1 VARCHAR(255) NOT NULL,
    targetlang2 VARCHAR(255),
    targetlang3 VARCHAR(255),
    city VARCHAR(255),
    age INTEGER,
    fact VARCHAR(255),
    url VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

DROP TABLE IF EXISTS starred;

CREATE TABLE starred (
    id SERIAL PRIMARY KEY,
    starreduser INTEGER NOT NULL,
    loggedinuser  INTEGER NOT NULL
);

DROP TABLE IF EXISTS messages;
CREATE TABLE messages (
    id SERIAL PRIMARY KEY,
    sender_id INTEGER NOT NULL,
    recipient_id  INTEGER NOT NULL,
    message VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP

);
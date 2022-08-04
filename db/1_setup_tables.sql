CREATE TABLE
  post (
    id serial PRIMARY KEY,
    title varchar(100),
    text varchar(500)
  );

CREATE TABLE
  user_account (
    id serial PRIMARY KEY,
    username VARCHAR(30) NOT NULL,
    password CHAR(60) NOT NULL
  );

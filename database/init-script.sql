CREATE TABLE movies(
   movie_id INTEGER PRIMARY KEY,
   title VARCHAR (255) UNIQUE NOT NULL,
   duration INTEGER NOT NULL
);

INSERT INTO movies (movie_id, title, duration) VALUES (1, 'Wielki Gatsby', 142);
INSERT INTO movies (movie_id, title, duration) VALUES (2, 'Kill Bill 1', 111);
INSERT INTO movies (movie_id, title, duration) VALUES (3, 'Złoto dla zuchwałych', 144);
SHOW DATABASES;


CREATE DATABASE school;


USE school;

CREATE TABLE students (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255),
    age INT CHECK(age >= 6),
    gender CHAR(1) DEFAULT 'M'
);

INSERT INTO students 
VALUES (4,"Shams Alalfy","shamsa@gmail.com", 20, 'F'),
(3, "Tahany Emad", "tahany@gmail.com", 20, 'M');

INSERT INTO students(name, email, age)
VALUES ("Shams Alalfy","shamsa@gmail.com", 10),
("Tahany Emad", "tahasny@gmail.com", 14);

SELECT * FROM students;

SELECT name, age 
FROM students;

UPDATE students
SET name = "Tahany"
WHERE id = 3;

UPDATE students
SET name = "Tahany Emad"
WHERE name = "Tahany";


DELETE FROM students
WHERE id > 3;


SELECT * 
FROM students
WHERE id = 3;


SELECT * 
FROM students
WHERE age BETWEEN 20 AND 30;

SELECT * 
FROM students
WHERE age IN (14,10);

SELECT * 
FROM students
WHERE name LIKE '%ms%';


SELECT * 
FROM students
WHERE name LIKE '__ha%';

DROP TABLE students;















DROP DATABASE school;
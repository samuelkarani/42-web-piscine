CREATE TABLE ft_table (
	id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
	login VARCHAR(8) DEFAULT 'toto' NOT NULL,
	`group` ENUM('staff', 'student', 'other') NOT NULL,
	creation_date DATE NOT NULL
);
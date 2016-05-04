-- 4. Write SQL so that it does the following things to create the database in a `schema.sql` file

--         * Create the `burgers_db`
--         * Use the `burgers_db`
--         * Create a burgers table like the below instructions
--             * `id` as primary key auto incrementing
--             * `burger_name` as a string
--             * `devoured` as a boolean
--             * `date` as TIMESTAMP


### Schema
CREATE DATABASE burgers_db;
USE burgers_db;

CREATE TABLE burgers
(
	id int NOT NULL AUTO_INCREMENT,
	burger_name varchar(255) NOT NULL,
	devoured boolean DEFAULT 0,
	date TIMESTAMP DEFAULT now() ON UPDATE now(),
	PRIMARY KEY (id)
);


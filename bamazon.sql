/* Schema for SQL bamazon database/table. */
DROP DATABASE IF EXISTS bamazon_db;

/* Create database */
CREATE DATABASE bamazon_db;
USE bamazon_db;

/* Create new table with a primary key that auto-increments, and a text field */
CREATE TABLE products
(
  item_id  INTEGER(11) AUTO_INCREMENT NOT NULL,
  product_name VARCHAR (100) NOT NULL,
  department_name VARCHAR (100) NOT NULL,
  price INTEGER (100) NOT NULL,
  stock_quantity INTEGER (100) NOT NULL,
  PRIMARY KEY (item_id)
);

-- Creates new rows
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("MacBook Pro", "Electronics", 1800, 5);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("AirPods", "Electronics", 170, 10);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Han Solo", "Funko Pop", 8, 25);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Luke Skywalker", "Funko Pop", 8, 1);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("12-inch fan", "Home Goods", 25, 10);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Vacuum", "Home Goods", 200, 5);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Jordan IX", "Shoes", 140, 3);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("iPhone X", "Electronics", 1100, 11);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Flamethrower", "The Boring Company", 4999, 0);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Tesla Model 3", "Electric Cars", 55000, 8);
DROP DATABASE IF EXISTS bamazon_DB;

CREATE DATABASE bamazon_DB;

USE bamazon_DB;

     
create table products (
      item_id INT NOT NULL AUTO_INCREMENT,
	  Product_name VARCHAR(45) NULL,
	  Department_name VARCHAR(45) NULL,
	  Price DECIMAL(10,2) NULL,
	  Stock_quantity INT(10),
	  PRIMARY KEY (item_id)
      );
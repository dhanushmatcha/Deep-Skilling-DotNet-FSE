# Exercise 1 - Ranking and Window Functions

## Objective

Demonstrate the use of SQL Window Functions such as ROW_NUMBER(), RANK(), DENSE_RANK(), OVER(), and PARTITION BY.

## Scenario

An online retail store wants to identify the most expensive products in each category and compare different ranking methods.

## Functions Used

### ROW_NUMBER()

Assigns a unique sequential number to each row within a category.

### RANK()

Assigns ranks to rows and skips rank numbers when ties occur.

### DENSE_RANK()

Assigns ranks without skipping numbers when ties occur.

### PARTITION BY

Divides the result set into categories before applying ranking functions.

## Query Features

* Product Ranking
* Category-wise Analysis
* Window Functions
* Sorting by Product Price

## Output

The query displays:

* Product ID
* Product Name
* Category
* Price
* Row Number
* Rank
* Dense Rank

## Conclusion

Window functions provide an efficient way to perform ranking and analytical operations on grouped data without using complex subqueries.

## Author

Dhanu

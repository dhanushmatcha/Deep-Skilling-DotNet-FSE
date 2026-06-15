# Advanced SQL

## Overview

This module focuses on advanced SQL concepts used in database-driven applications. The exercises demonstrate the use of Window Functions, Ranking Functions, and Stored Procedures for efficient data retrieval, analysis, and management.

---

## Exercise 1 - Ranking and Window Functions

### Objective

Use SQL Window Functions such as ROW_NUMBER(), RANK(), DENSE_RANK(), OVER(), and PARTITION BY to rank products within categories.

### Scenario

An online retail store wants to identify the most expensive products in each category and compare different ranking methods.

### Key Concepts

* ROW_NUMBER()
* RANK()
* DENSE_RANK()
* OVER()
* PARTITION BY
* ORDER BY

### Output

The query displays:

* Product ID
* Product Name
* Category
* Price
* Row Number
* Rank
* Dense Rank

### Observation

* ROW_NUMBER() assigns unique sequential numbers.
* RANK() skips rank values when ties occur.
* DENSE_RANK() does not skip rank values when ties occur.

---

## Exercise 2 - Create Stored Procedure

### Objective

Create and execute a stored procedure to retrieve employee details based on a department.

### Scenario

An Employee Management System requires a reusable procedure to fetch employee information belonging to a specific department.

### Key Concepts

* Stored Procedures
* Input Parameters
* Query Reusability
* Employee Data Retrieval

### Procedure

sp_GetEmployeesByDepartment

### Functionality

Returns employee details for the specified department.

### Sample Execution

CALL sp_GetEmployeesByDepartment(3);

---

## Exercise 5 - Return Data from a Stored Procedure

### Objective

Create a stored procedure that returns the total number of employees in a specified department.

### Scenario

Organizations often require department-wise employee statistics for reporting and decision-making.

### Key Concepts

* Stored Procedures
* Aggregate Functions
* COUNT()
* Parameterized Queries

### Procedure

sp_GetEmployeeCount

### Functionality

Returns the total number of employees belonging to the specified department.

### Sample Execution

CALL sp_GetEmployeeCount(3);

### Sample Output

TotalEmployees

2

---

## Comparison

| Exercise              | Concept Used            | Application                |
| --------------------- | ----------------------- | -------------------------- |
| Ranking Functions     | Window Functions        | Product Ranking & Analysis |
| Stored Procedure      | Reusable Database Logic | Employee Data Retrieval    |
| Return Data Procedure | Aggregate Functions     | Employee Statistics        |

---

## Advantages

* Improves query performance and readability.
* Promotes code reusability using stored procedures.
* Simplifies complex data analysis using window functions.
* Enhances database maintainability.

---

## Conclusion

Advanced SQL features such as Window Functions and Stored Procedures enable efficient data analysis and reusable database operations. These concepts are widely used in enterprise applications for reporting, analytics, and business logic implementation.

## Author

Dhanu


# Exercise 2 - Create Stored Procedure

## Objective

Create and execute a stored procedure to retrieve employee details based on a department.

## Scenario

An Employee Management System requires a reusable procedure to fetch employees belonging to a specific department.

## Stored Procedure

sp_GetEmployeesByDepartment

### Input Parameter

* DepartmentID

### Functionality

Returns all employee details belonging to the specified department.

## Concepts Used

* Stored Procedures
* Parameters
* SELECT Statement
* Employee Filtering

## Execution

The procedure is executed using:

CALL sp_GetEmployeesByDepartment(3);

## Benefits

* Code Reusability
* Improved Maintainability
* Better Security
* Reduced Query Repetition

## Author

Dhanu

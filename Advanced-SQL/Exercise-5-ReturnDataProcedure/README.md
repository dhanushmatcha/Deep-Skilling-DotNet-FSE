# Exercise 5 - Return Data from a Stored Procedure

## Objective

Create a stored procedure that returns the total number of employees in a specified department.

## Scenario

The Employee Management System needs a quick way to determine employee count for reporting purposes.

## Stored Procedure

sp_GetEmployeeCount

### Input Parameter

* DepartmentID

### Functionality

Counts the number of employees present in the specified department and returns the result.

## Concepts Used

* Stored Procedures
* Aggregate Functions
* COUNT()
* Parameterized Queries

## Execution

The procedure is executed using:

CALL sp_GetEmployeeCount(3);

## Sample Output

## TotalEmployees

2

## Conclusion

Stored procedures help encapsulate business logic and improve database performance through reusable database operations.

## Author

Dhanu

CREATE TABLE Departments (
    DepartmentID INT PRIMARY KEY,
    DepartmentName VARCHAR(100)
);

CREATE TABLE Employees (
    EmployeeID INT AUTO_INCREMENT PRIMARY KEY,
    FirstName VARCHAR(50),
    LastName VARCHAR(50),
    DepartmentID INT,
    Salary DECIMAL(10,2),
    JoinDate DATE,
    FOREIGN KEY (DepartmentID)
    REFERENCES Departments(DepartmentID)
);

INSERT INTO Departments VALUES
(1,'HR'),
(2,'Finance'),
(3,'IT'),
(4,'Marketing');

INSERT INTO Employees
(FirstName, LastName, DepartmentID, Salary, JoinDate)
VALUES
('John','Doe',1,5000,'2020-01-15'),
('Jane','Smith',2,6000,'2019-03-22'),
('Michael','Johnson',3,7000,'2018-07-30'),
('Emily','Davis',4,5500,'2021-11-05');

DELIMITER $$

CREATE PROCEDURE sp_GetEmployeesByDepartment(
    IN p_DepartmentID INT
)
BEGIN
    SELECT *
    FROM Employees
    WHERE DepartmentID = p_DepartmentID;
END $$

DELIMITER ;

CALL sp_GetEmployeesByDepartment(3);
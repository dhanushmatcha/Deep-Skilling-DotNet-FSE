DELIMITER $$

CREATE PROCEDURE sp_GetEmployeeCount(
    IN p_DepartmentID INT
)
BEGIN

    SELECT COUNT(*) AS TotalEmployees
    FROM Employees
    WHERE DepartmentID = p_DepartmentID;

END $$

DELIMITER ;

CALL sp_GetEmployeeCount(3);
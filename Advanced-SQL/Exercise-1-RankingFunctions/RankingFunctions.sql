CREATE TABLE Products (
    ProductID INT PRIMARY KEY,
    ProductName VARCHAR(100),
    Category VARCHAR(50),
    Price DECIMAL(10,2)
);

INSERT INTO Products VALUES
(1,'Laptop','Electronics',80000),
(2,'Mobile','Electronics',60000),
(3,'Headphones','Electronics',60000),
(4,'Shirt','Fashion',2000),
(5,'Jeans','Fashion',3000),
(6,'Jacket','Fashion',3000);

SELECT
    ProductID,
    ProductName,
    Category,
    Price,

    ROW_NUMBER() OVER(
        PARTITION BY Category
        ORDER BY Price DESC
    ) AS RowNum,

    RANK() OVER(
        PARTITION BY Category
        ORDER BY Price DESC
    ) AS RankNum,

    DENSE_RANK() OVER(
        PARTITION BY Category
        ORDER BY Price DESC
    ) AS DenseRankNum

FROM Products;
# EF Core 8.0 - Lab 2: Setting Up the Database Context for a Retail Store

## Overview

This lab demonstrates how to configure Entity Framework Core with SQL Server by creating entity models and setting up a database context. The project follows the Code First approach and prepares the application for database operations in later labs.

---

## Objective

- Create entity models for the retail inventory system.
- Configure the `DbContext` class.
- Connect the application to SQL Server using Entity Framework Core.
- Prepare the project for database creation and CRUD operations.

---

## Project Structure

```
RetailInventory
│
├── Data
│   └── AppDbContext.cs
│
├── Models
│   ├── Category.cs
│   └── Product.cs
│
├── Program.cs
├── RetailInventory.csproj
└── README.md
```

---

## Models

### Category

Represents a product category.

**Properties**
- Id
- Name
- Products

### Product

Represents a product in the retail store.

**Properties**
- Id
- Name
- Price
- CategoryId
- Category

---

## Database Context

The `AppDbContext` class inherits from `DbContext` and contains:

- `Products` DbSet
- `Categories` DbSet

The SQL Server connection is configured using the `UseSqlServer()` method.

Example:

```csharp
protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
{
    optionsBuilder.UseSqlServer(
        "Server=localhost\\SQLEXPRESS;Database=RetailInventoryDB;Trusted_Connection=True;TrustServerCertificate=True");
}
```

---

## Technologies Used

- C#
- .NET
- Entity Framework Core
- SQL Server Express
- SQL Server Management Studio (SSMS)
- Visual Studio 2022

---

## NuGet Packages

- Microsoft.EntityFrameworkCore.SqlServer
- Microsoft.EntityFrameworkCore.Design
- Microsoft.EntityFrameworkCore.Tools

---

## Build Status

✔ Project builds successfully without errors.

---

## Learning Outcomes

- Understood Entity Framework Core architecture.
- Created entity classes.
- Configured DbContext.
- Connected a .NET application to SQL Server.
- Prepared the project for Code First database creation.

---

## Author

**Dhanush Matcha**

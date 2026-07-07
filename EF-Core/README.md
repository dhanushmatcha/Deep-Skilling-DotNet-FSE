# EF Core 8.0 Hands-On – Retail Inventory Management System

## 📌 Project Overview

This project demonstrates the implementation of **Entity Framework Core** using the **Code First** approach to build a simple **Retail Inventory Management System**.

The project covers the complete Entity Framework Core workflow, including configuring the database context, creating migrations, inserting data, and retrieving records from a SQL Server database.

---

## 🎯 Objectives

- Understand Object Relational Mapping (ORM).
- Learn the fundamentals of Entity Framework Core.
- Configure DbContext and connect to SQL Server.
- Create and apply database migrations.
- Insert records into the database asynchronously.
- Retrieve data using Entity Framework Core query methods.

---

# 🧪 Labs Covered

## ✅ Lab 1 – Understanding ORM with a Retail Inventory System

### Topics Covered

- Introduction to ORM
- Entity Framework Core
- EF Core vs Entity Framework
- Features of EF Core 8
- Project creation
- Installing EF Core packages

### Outcome

Created a .NET Console Application and configured Entity Framework Core.

---

## ✅ Lab 2 – Setting Up the Database Context

### Topics Covered

- Creating Entity Models
- Product Model
- Category Model
- Configuring DbContext
- SQL Server Connection

### Outcome

Configured Entity Framework Core to connect to SQL Server using AppDbContext.

---

## ✅ Lab 3 – Using EF Core CLI to Create and Apply Migrations

### Topics Covered

- EF Core CLI
- Initial Migration
- Database Creation
- SQL Server Verification

### Commands Used

```bash
dotnet ef migrations add InitialCreate
dotnet ef database update
```

### Outcome

Successfully created:

- RetailInventoryDB
- Categories Table
- Products Table
- __EFMigrationsHistory Table

---

## ✅ Lab 4 – Inserting Initial Data

### Topics Covered

- AddAsync()
- AddRangeAsync()
- SaveChangesAsync()

### Records Inserted

### Categories

- Electronics
- Groceries

### Products

- Laptop
- Rice Bag

### Outcome

Successfully inserted sample records into SQL Server.

---

## ✅ Lab 5 – Retrieving Data

### Topics Covered

- ToListAsync()
- FindAsync()
- FirstOrDefaultAsync()

### Sample Output

```text
All Products:
Laptop - ₹75000
Rice Bag - ₹1200

Found Product: Laptop
Expensive Product: Laptop
```

### Outcome

Successfully retrieved and displayed data from SQL Server.

---

# 🛠 Technologies Used

- C#
- .NET
- Entity Framework Core
- SQL Server Express 2022
- SQL Server Management Studio (SSMS)
- Visual Studio 2022
- EF Core CLI

---

# 📦 NuGet Packages

- Microsoft.EntityFrameworkCore.SqlServer
- Microsoft.EntityFrameworkCore.Design
- Microsoft.EntityFrameworkCore.Tools

---

# 📁 Project Structure

```text
RetailInventory
│
├── Data
│   └── AppDbContext.cs
│
├── Models
│   ├── Category.cs
│   └── Product.cs
│
├── Migrations
│   ├── InitialCreate.cs
│   ├── InitialCreate.Designer.cs
│   └── AppDbContextModelSnapshot.cs
│
├── Program.cs
├── RetailInventory.csproj
├── README.md
```

---

# 🗄 Database

**Database Name**

```
RetailInventoryDB
```

### Tables Created

- Categories
- Products
- __EFMigrationsHistory

---

# 🚀 EF Core CLI Commands

### Install EF CLI

```bash
dotnet tool install --global dotnet-ef
```

### Create Migration

```bash
dotnet ef migrations add InitialCreate
```

### Apply Migration

```bash
dotnet ef database update
```

### Run the Application

```bash
dotnet run
```

---

# 📚 Key Concepts Learned

- Object Relational Mapping (ORM)
- Entity Framework Core
- DbContext
- DbSet
- Code First Development
- SQL Server Integration
- Entity Relationships
- Database Migrations
- CRUD Operations
- Asynchronous Database Operations
- LINQ Queries

---

# ✅ Project Outcomes

- Successfully configured Entity Framework Core.
- Connected the application to SQL Server.
- Created the RetailInventory database.
- Generated database schema using migrations.
- Inserted sample product and category data.
- Retrieved data using asynchronous EF Core methods.
- Verified database tables using SQL Server Management Studio.

---

# 👨‍💻 Author

**Dhanush Matcha**

B.Tech – Computer Science and Engineering

Vignan's Foundation for Science, Technology & Research

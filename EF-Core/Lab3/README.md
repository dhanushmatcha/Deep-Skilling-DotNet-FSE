# EF Core 8.0 – Lab 3: Using EF Core CLI to Create and Apply Migrations

## 📌 Overview

This lab demonstrates how to use Entity Framework Core CLI to generate and apply database migrations using the Code First approach. The database schema is automatically created in SQL Server based on the entity models.

---

## 🎯 Objective

- Install Entity Framework Core CLI
- Generate an initial migration
- Apply the migration to SQL Server
- Verify the created database and tables using SQL Server Management Studio (SSMS)

---

## 🛠 Technologies Used

- C#
- .NET 10 Console Application
- Entity Framework Core
- SQL Server Express 2022
- SQL Server Management Studio (SSMS)
- Visual Studio 2022

---

## 📦 NuGet Packages

- Microsoft.EntityFrameworkCore.SqlServer
- Microsoft.EntityFrameworkCore.Design
- Microsoft.EntityFrameworkCore.Tools

---

## ⚙ Commands Executed

### Check EF CLI Version

```bash
dotnet ef --version
```

### Create Initial Migration

```bash
dotnet ef migrations add InitialCreate
```

### Apply Migration

```bash
dotnet ef database update
```

---

## 📂 Project Structure

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
├── Migrations
│   ├── 20260707141005_InitialCreate.cs
│   ├── 20260707141005_InitialCreate.Designer.cs
│   └── AppDbContextModelSnapshot.cs
│
├── Program.cs
├── RetailInventory.csproj
└── README.md
```

---

## 🗄 Database Created

**Database Name**

```
RetailInventoryDB
```

### Tables Created

- Categories
- Products
- __EFMigrationsHistory

---

## ✅ Output

- Successfully generated the initial migration.
- Successfully created the SQL Server database.
- Verified the database and tables using SSMS.

---

## 📚 Learning Outcomes

- Understood EF Core Code First Migrations.
- Learned how to generate migrations using EF CLI.
- Applied migrations to SQL Server.
- Verified the generated database schema.

---

## 👨‍💻 Author

**Dhanush Matcha**

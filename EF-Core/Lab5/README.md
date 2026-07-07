# EF Core 8.0 – Lab 5: Retrieving Data from the Database

## 📌 Overview

This lab demonstrates how to retrieve data from a SQL Server database using Entity Framework Core. Various query methods such as `ToListAsync()`, `FindAsync()`, and `FirstOrDefaultAsync()` are used to fetch product information from the database.

---

## 🎯 Objective

- Retrieve all product records from the database.
- Find a product using its primary key.
- Retrieve the first product matching a specified condition.
- Display the retrieved data in the console.

---

## 🛠 Technologies Used

- C#
- .NET Console Application
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
│
├── Program.cs
├── RetailInventory.csproj
└── README.md
```

---

## 🔍 EF Core Methods Used

### Retrieve All Products

```csharp
var products = await context.Products.ToListAsync();
```

### Find Product by ID

```csharp
var product = await context.Products.FindAsync(1);
```

### Retrieve Product Using a Condition

```csharp
var expensive = await context.Products
    .FirstOrDefaultAsync(p => p.Price > 50000);
```

---

## ▶ Sample Output

```text
All Products:
Laptop - ₹75000
Rice Bag - ₹1200

Found Product: Laptop
Expensive Product: Laptop
```

---

## 📚 Learning Outcomes

- Retrieved all records using `ToListAsync()`.
- Retrieved a specific record using `FindAsync()`.
- Retrieved data based on a condition using `FirstOrDefaultAsync()`.
- Displayed database records in a .NET Console Application.
- Understood asynchronous data retrieval in Entity Framework Core.

---

## ✅ Result

Successfully connected to SQL Server, retrieved product records from the database, and displayed the results using Entity Framework Core asynchronous query methods.

---

## 👨‍💻 Author

**Dhanush Matcha**

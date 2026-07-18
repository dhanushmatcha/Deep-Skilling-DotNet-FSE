# ASP.NET Core Web API – CRUD Operations

## 📌 Overview

This project demonstrates the implementation of RESTful CRUD (Create, Read, Update, Delete) operations using ASP.NET Core Web API. Employee data is stored in a hardcoded list and manipulated using HTTP methods.

---

## 🎯 Objectives

- Implement HTTP GET, POST, PUT, and DELETE action methods.
- Use the `FromBody` attribute to receive JSON data.
- Perform Create, Read, Update, and Delete operations on employee data.
- Validate employee IDs before updating or deleting records.
- Return appropriate HTTP status codes and action results.
- Test APIs using Swagger and Postman.

---

## 🛠 Technologies Used

- ASP.NET Core Web API (.NET 10)
- C#
- Visual Studio 2022
- Swagger / OpenAPI

---

## 📂 Project Structure

```
FirstWebApi
│
├── Controllers
│   └── EmployeeController.cs
│
├── Models
│   ├── Employee.cs
│   ├── Department.cs
│   └── Skill.cs
│
├── Filters
│   ├── CustomAuthFilter.cs
│   └── CustomExceptionFilter.cs
│
├── Program.cs
├── appsettings.json
├── launchSettings.json
└── README.md
```

---

## Employee Model

The Employee model contains the following properties:

- Id
- Name
- Salary
- Permanent
- Department
- Skills
- DateOfBirth

---

## API Endpoints

### 1. Get Employees

```
GET /Employee
```

Returns all employee records.

**Response**

- 200 OK

---

### 2. Add Employee

```
POST /Employee
```

Creates a new employee using JSON data.

**Request Body**

```json
{
  "id": 3,
  "name": "John",
  "salary": 60000,
  "permanent": true,
  "department": {
    "id": 103,
    "name": "Finance"
  },
  "skills": [
    {
      "id": 1,
      "name": "C#"
    }
  ],
  "dateOfBirth": "2000-01-01T00:00:00"
}
```

**Response**

- 200 OK

---

### 3. Update Employee

```
PUT /Employee
```

Updates an existing employee using the request body.

### Validation

If

- Employee Id ≤ 0
- Employee Id does not exist

API returns

```
400 Bad Request
```

with the message

```
Invalid employee id
```

Otherwise, the employee information is updated and returned.

---

### 4. Delete Employee

```
DELETE /Employee/{id}
```

Deletes an employee from the hardcoded list.

### Validation

If

- Employee Id ≤ 0
- Employee Id does not exist

API returns

```
400 Bad Request
```

with the message

```
Invalid employee id
```

Otherwise

```
200 OK
```

```
Employee deleted successfully
```

---

## Filters Implemented

### Custom Authorization Filter

- Checks for Authorization header.
- Validates Bearer token.
- Returns Bad Request for invalid requests.

### Custom Exception Filter

- Handles unhandled exceptions.
- Logs exception details.
- Returns HTTP 500 Internal Server Error.

---

## HTTP Methods Used

| Method | Endpoint | Description |
|---------|----------|-------------|
| GET | /Employee | Retrieve employee list |
| POST | /Employee | Create employee |
| PUT | /Employee | Update employee |
| DELETE | /Employee/{id} | Delete employee |

---

## HTTP Status Codes

- 200 OK
- 400 Bad Request
- 500 Internal Server Error

---

## Testing

The APIs were tested using:

- Swagger UI
- Postman

---

## Learning Outcomes

- Developed RESTful Web APIs using ASP.NET Core.
- Implemented CRUD operations.
- Used ActionResult for API responses.
- Implemented request validation.
- Used custom authorization and exception filters.
- Tested APIs using Swagger and Postman.

---

## Result

Successfully implemented a RESTful ASP.NET Core Web API supporting CRUD operations with request validation, custom filters, and proper HTTP responses.

---

## Author

**Dhanush Matcha**

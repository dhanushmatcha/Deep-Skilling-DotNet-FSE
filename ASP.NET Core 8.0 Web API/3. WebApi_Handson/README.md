# ASP.NET Core Web API – Lab 3: Custom Model, Authorization Filter & Exception Filter

## 📌 Overview

This lab demonstrates how to build a RESTful Web API using custom model classes, implement HTTP GET and POST operations, create a custom authorization filter, and handle application exceptions using a custom exception filter.

---

## 🎯 Objectives

- Create custom model classes.
- Return a list of custom objects through a Web API.
- Use the `FromBody` attribute to read request data.
- Implement a custom authorization filter.
- Implement a custom exception filter.
- Return appropriate HTTP status codes using `ProducesResponseType`.

---

## 🛠 Technologies Used

- C#
- ASP.NET Core Web API (.NET 10)
- Visual Studio 2022
- Swagger / OpenAPI

---

## 📂 Project Structure

```
FirstWebApi
│
├── Controllers
│   ├── EmployeeController.cs
│   └── WeatherForecastController.cs
│
├── Filters
│   ├── CustomAuthFilter.cs
│   └── CustomExceptionFilter.cs
│
├── Models
│   ├── Employee.cs
│   ├── Department.cs
│   └── Skill.cs
│
├── Properties
│   └── launchSettings.json
│
├── Program.cs
├── appsettings.json
├── appsettings.Development.json
├── ExceptionLog.txt
├── FirstWebApi.csproj
└── README.md
```

---

## Models

### Employee

- Id
- Name
- Salary
- Permanent
- Department
- Skills
- DateOfBirth

### Department

- Id
- Name

### Skill

- Id
- Name

---

## API Endpoints

### Get Employees

```
GET /Employee
```

Returns the list of employees.

Status Codes

- 200 OK
- 500 Internal Server Error

---

### Add Employee

```
POST /Employee
```

Accepts an Employee object from the request body.

---

## Request Body Example

```json
{
  "id": 3,
  "name": "John",
  "salary": 65000,
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
  "dateOfBirth": "2000-01-01"
}
```

---

## Custom Authorization Filter

Implemented using:

- ActionFilterAttribute
- OnActionExecuting()

Validation Performed

- Checks whether the Authorization header is present.
- Checks whether the Authorization value contains the word **Bearer**.

Responses

### Missing Authorization Header

```
400 Bad Request
```

```
Invalid request - No Auth token
```

### Invalid Token

```
400 Bad Request
```

```
Invalid request - Token present but Bearer unavailable
```

---

## Custom Exception Filter

Implemented using:

- IExceptionFilter
- OnException()

Features

- Captures unhandled exceptions.
- Writes exception details to `ExceptionLog.txt`.
- Returns HTTP 500 Internal Server Error.

---

## HTTP Status Codes Used

- 200 OK
- 400 Bad Request
- 500 Internal Server Error

---

## Swagger Testing

Verified using Swagger UI.

- GET Employee
- POST Employee
- Authorization validation
- Exception handling

---

## Learning Outcomes

- Created custom model classes.
- Implemented RESTful GET and POST APIs.
- Used `FromBody` for request data.
- Implemented custom authorization filtering.
- Implemented centralized exception handling.
- Used `ProducesResponseType` for documenting API responses.
- Tested APIs using Swagger.

---

## Result

Successfully implemented a RESTful ASP.NET Core Web API with custom models, request validation using action filters, centralized exception handling, and Swagger testing.

---

## 👨‍💻 Author

**Dhanush Matcha**

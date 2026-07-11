# ASP.NET Core Web API – Lab 2: Swagger & Postman

## 📌 Overview

This lab demonstrates how to configure Swagger in an ASP.NET Core Web API application, test REST API endpoints using Swagger UI and Postman, and understand routing in Web APIs.

---

## 🎯 Objectives

- Configure Swagger/OpenAPI in an ASP.NET Core Web API.
- Test API endpoints using Swagger UI.
- Test Web API endpoints using Postman.
- Understand HTTP GET and POST requests.
- Learn Route attributes in Web API.
- Modify route names and verify API accessibility.

---

## 🛠 Technologies Used

- C#
- ASP.NET Core Web API (.NET 10)
- Swagger (Swashbuckle.AspNetCore)
- Postman
- Visual Studio 2022

---

## 📂 Project Structure

```
FirstWebApi
│
├── Controllers
│   ├── EmployeeController.cs
│   └── WeatherForecastController.cs
│
├── Properties
│   └── launchSettings.json
│
├── appsettings.json
├── appsettings.Development.json
├── Program.cs
├── FirstWebApi.csproj
└── README.md
```

---

## NuGet Packages

- Swashbuckle.AspNetCore
- Microsoft.AspNetCore.OpenApi

---

## Features

- Swagger/OpenAPI integration
- Employee REST API
- HTTP GET endpoint
- HTTP POST endpoint
- Route customization
- API testing using Postman

---

## API Endpoints

### Get Employees

```
GET /Employee
```

Returns the list of employees.

---

### Add Employee

```
POST /Employee
```

Adds a new employee to the list.

---

### Modified Route

After changing the Route attribute:

```csharp
[Route("Emp")]
```

The endpoint becomes:

```
GET /Emp
```

---

## Swagger Testing

- Run the application.
- Open:

```
http://localhost:5047/swagger
```

- Select the required endpoint.
- Click **Try it Out**.
- Click **Execute**.
- Verify the JSON response.

---

## Postman Testing

### GET Request

```
GET http://localhost:5047/Employee
```

Expected Response:

```json
[
  "Dhanush",
  "Rahul",
  "Priya",
  "Anil"
]
```

Status Code:

```
200 OK
```

---

### Route Testing

After modifying the route:

```
GET http://localhost:5047/Emp
```

Verify that the API returns the same employee list.

---

## Learning Outcomes

- Learned to integrate Swagger into an ASP.NET Core Web API.
- Understood Swagger UI for API documentation and testing.
- Tested REST APIs using Postman.
- Learned HTTP GET and POST methods.
- Understood Route attributes and endpoint customization.

---

## Result

Successfully configured Swagger, tested Web API endpoints using Swagger UI and Postman, and verified routing functionality in an ASP.NET Core Web API application.

---

## 👨‍💻 Author

**Dhanush Matcha**

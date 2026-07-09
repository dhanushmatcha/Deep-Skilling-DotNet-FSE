# ASP.NET Core Web API – Lab 1: First Web API Using .NET Core

## 📌 Overview

This lab demonstrates the creation of a basic ASP.NET Core Web API project. The default WeatherForecast controller is used to understand how Web APIs expose endpoints and respond to HTTP GET requests.

---

## 🎯 Objective

- Create an ASP.NET Core Web API project.
- Understand the project structure.
- Run the Web API application.
- Test the default GET endpoint using Swagger/OpenAPI.

---

## 🛠 Technologies Used

- C#
- ASP.NET Core Web API
- .NET
- Visual Studio 2022
- Swagger / OpenAPI

---

## 📂 Project Structure

```
FirstWebApi
│
├── Controllers
│   └── WeatherForecastController.cs
│
├── Properties
│   └── launchSettings.json
│
├── appsettings.json
├── Program.cs
├── FirstWebApi.csproj
└── README.md
```

---

## Features

- ASP.NET Core Web API project
- RESTful GET endpoint
- OpenAPI documentation
- Swagger UI for testing APIs

---

## Testing the API

### Endpoint

```
GET /WeatherForecast
```

### Sample Response

```json
[
  {
    "date": "2026-07-08",
    "temperatureC": 28,
    "temperatureF": 82,
    "summary": "Warm"
  }
]
```

---

## Learning Outcomes

- Understood the structure of an ASP.NET Core Web API project.
- Learned how controllers expose REST endpoints.
- Tested HTTP GET requests using Swagger/OpenAPI.
- Successfully executed the first Web API application.

---

## Result

Successfully created and executed an ASP.NET Core Web API application and verified the GET endpoint using Swagger/OpenAPI.

---

## 👨‍💻 Author

**Dhanush Matcha**

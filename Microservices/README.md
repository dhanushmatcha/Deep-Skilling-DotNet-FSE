# JWT Authentication Microservice

A simple ASP.NET Core Web API project demonstrating JWT (JSON Web Token) Authentication for secure user login and API access.

## Features

- JWT Authentication
- Secure Login API
- Token Generation
- ASP.NET Core Web API
- Swagger Integration
- RESTful API

## Technologies Used

- ASP.NET Core Web API (.NET 10)
- C#
- JWT Bearer Authentication
- Swagger (Swashbuckle.AspNetCore)
- Visual Studio 2022

## Project Structure

```
JwtMicroservice
│
├── Controllers
│   ├── AuthController.cs
│   └── WeatherForecastController.cs
│
├── Models
│   └── LoginModel.cs
│
├── Program.cs
├── appsettings.json
└── JwtMicroservice.csproj
```

## JWT Configuration

Configure the following settings in **appsettings.json**:

```json
"Jwt": {
  "Key": "ThisIsASecretKeyForJwtToken123456789",
  "Issuer": "MyAuthServer",
  "Audience": "MyApiUsers",
  "DurationInMinutes": 60
}
```

## API Endpoint

### Login

**POST**

```
/api/Auth/login
```

### Request Body

```json
{
  "username": "admin",
  "password": "admin123"
}
```

### Successful Response

```json
{
  "token": "YOUR_JWT_TOKEN"
}
```

## How to Run

1. Clone the repository.
2. Open the project in Visual Studio 2022.
3. Restore NuGet packages.
4. Build the solution.
5. Run the project.
6. Open Swagger.
7. Test the Login API.

## Sample Credentials

| Username | Password |
|----------|----------|
| admin | admin123 |

## Output

After successful authentication, the API generates a JWT token that can be used to access protected endpoints.

## Learning Outcomes

- Understanding JWT Authentication
- Implementing Secure Login APIs
- Generating JWT Tokens
- Configuring Authentication Middleware
- Testing APIs using Swagger

## Author

**Dhanush Matcha**

B.Tech - Computer Science and Engineering

Vignan's Foundation for Science, Technology & Research

---

**Developed as part of the Cognizant Deep Skilling Program.**

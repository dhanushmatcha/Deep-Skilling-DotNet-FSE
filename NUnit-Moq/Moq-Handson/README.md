# Moq Handson – Customer Communication Library

## Overview

This project demonstrates how to write **testable code** using **Dependency Injection (DI)** and **Moq** in C#. The application simulates sending emails to customers while keeping the email functionality isolated, making it suitable for unit testing.

Instead of directly depending on an SMTP server during testing, the application communicates through the `IMailSender` interface. This dependency can later be replaced with a mock object using the Moq framework.

## Objectives

* Understand Mocking in Test-Driven Development (TDD)
* Implement Dependency Injection using Constructor Injection
* Create testable code by isolating external dependencies
* Prepare the project for Unit Testing using NUnit and Moq

## Project Structure

```text
CustomerCommLib/
│
├── IMailSender.cs
├── MailSender.cs
├── CustomerComm.cs
├── CustomerCommLib.csproj
└── CustomerCommLib.sln
```

## Technologies Used

* C#
* .NET
* Visual Studio 2022
* SMTP (System.Net.Mail)
* Dependency Injection

## Classes

### IMailSender

Defines the contract for sending emails.

### MailSender

Implements the `IMailSender` interface and contains the SMTP email sending logic.

### CustomerComm

Represents the class under test. It receives an `IMailSender` object through constructor injection and uses it to send emails without directly depending on the mail server.

## Key Concepts

* Mocking
* Dependency Injection
* Constructor Injection
* Loose Coupling
* Unit Testing
* Testable Code

## Expected Result

The project builds successfully and is ready for unit testing with **NUnit** and **Moq**, where the `IMailSender` dependency can be mocked to avoid sending real emails during testing.

## Author

**Dhanush Matcha**


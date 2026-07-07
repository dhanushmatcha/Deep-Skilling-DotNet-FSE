# NUnit & Moq

## Overview

This module introduces the fundamentals of **Unit Testing** and **Mocking** in .NET applications. It demonstrates how to write automated unit tests using the **NUnit Framework** and how to isolate dependencies using the **Moq Framework** to improve code quality and maintainability.

---

## Objectives

* Understand the concept of Unit Testing.
* Differentiate Unit Testing from Functional Testing.
* Learn different types of software testing.
* Understand the benefits of Automated Testing.
* Learn loosely coupled and testable application design.
* Write parameterized unit tests using NUnit.
* Use NUnit attributes such as **TestFixture**, **Test**, **SetUp**, **TearDown**, **Ignore**, and **TestCase**.
* Understand the basics of mocking dependencies using the Moq Framework.

---

# NUnit Hands-On

## Objective

Validate the functionality of a calculator application by writing unit tests for the **Addition** method using the NUnit Framework.

### Concepts Covered

* TestFixture
* Test
* TestCase
* SetUp
* TearDown
* Assert.That()

### Activities Performed

* Created an NUnit Test Project.
* Added a reference to the CalcLibrary project.
* Wrote parameterized test cases.
* Executed tests using Test Explorer.
* Verified successful execution of all test cases.

### Output

* Total Tests : 4
* Passed : 4
* Failed : 0
* Skipped : 0

---

# Moq Hands-On

## Objective

Learn how to use the Moq Framework to create mock implementations for dependent classes and verify application behavior without relying on external services.

### Concepts Covered

* Mock Objects
* Dependency Injection
* Loose Coupling
* Test Isolation
* Interface-based Programming

### Activities Performed

* Created an interface for the mail service.
* Implemented the mail sender class.
* Developed customer communication functionality.
* Used mock objects to isolate dependencies.
* Verified application behavior using mocked services.

---

# Types of Testing

### Unit Testing

Tests individual methods or classes independently.

### Functional Testing

Validates complete application functionality against business requirements.

### Automated Testing

Executes test cases automatically using testing frameworks.

### Performance Testing

Measures application responsiveness, speed, and scalability.

---

# Benefits of Automated Testing

* Detects defects early in development.
* Improves software quality.
* Reduces manual testing effort.
* Supports Continuous Integration and Continuous Delivery (CI/CD).
* Makes code changes safer through regression testing.

---

# NUnit Attributes

| Attribute   | Description                                        |
| ----------- | -------------------------------------------------- |
| TestFixture | Marks a class as a test class.                     |
| Test        | Marks a method as a test case.                     |
| TestCase    | Executes the same test with multiple input values. |
| SetUp       | Executes before every test case.                   |
| TearDown    | Executes after every test case.                    |
| Ignore      | Temporarily skips a test case.                     |

---

# Tools & Technologies

* C#
* .NET
* NUnit Framework
* Moq Framework
* Visual Studio 2022

---

# Folder Structure

```text
NUnit-Moq/
│
├── README.md
│
├── NUnit-Handson/
│   ├── CalculatorTests.cs
│   ├── Output.png
│   └── README.md
│
└── Moq-Handson/
    ├── CustomerComm.cs
    ├── CustomerCommLib.csproj
    ├── IMailSender.cs
    ├── MailSender.cs
    ├── Output.png
    └── README.md
```

---

# Learning Outcomes

After completing this module, I gained practical experience in:

* Writing automated unit tests using NUnit.
* Creating parameterized test cases.
* Using NUnit assertions to validate expected outcomes.
* Applying mocking techniques with the Moq Framework.
* Designing loosely coupled and testable applications.
* Improving software quality through automated testing.

---

# Conclusion

The NUnit and Moq frameworks provide a powerful foundation for automated testing in .NET applications. NUnit simplifies the process of writing and executing unit tests, while Moq enables developers to isolate dependencies and test application logic independently. Together, these frameworks help produce reliable, maintainable, and high-quality software.

---

## Author

**Dhanu**


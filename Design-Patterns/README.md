# Design Patterns

## Overview

This module demonstrates the implementation of commonly used software design patterns in Java. Design patterns provide reusable solutions to recurring software design problems and help create maintainable, scalable, and flexible applications.

---

## Exercise 1 - Singleton Pattern

### Objective

Implement the Singleton Design Pattern to ensure that only one instance of a Logger class exists throughout the application lifecycle.

### Scenario

A logging utility is required in an application. To maintain consistency and avoid creating multiple logger objects, only one instance of the Logger class should be available.

### Key Concepts

* Private Constructor
* Static Instance Variable
* Global Access Point
* Single Object Creation

### Output

Logger Instance Created

LOG: First Message

LOG: Second Message

Only one Logger instance exists.

---

## Exercise 2 - Factory Method Pattern

### Objective

Implement the Factory Method Design Pattern to create different types of documents such as Word, PDF, and Excel documents.

### Scenario

A document management system needs to create different document objects without exposing the object creation logic to the client.

### Key Concepts

* Factory Method
* Abstraction
* Loose Coupling
* Object Creation Delegation

### Output

Opening Word Document

Opening PDF Document

Opening Excel Document

---

## Comparison

| Singleton Pattern              | Factory Method Pattern            |
| ------------------------------ | --------------------------------- |
| Ensures only one object exists | Creates objects through factories |
| Controls object creation       | Delegates object creation         |
| Used for shared resources      | Used for flexible object creation |
| Example: Logger                | Example: Document Generator       |

---

## Advantages

### Singleton Pattern

* Prevents multiple object creation
* Saves memory
* Provides a global access point

### Factory Method Pattern

* Promotes loose coupling
* Improves scalability
* Simplifies maintenance
* Supports Open/Closed Principle

---

## Conclusion

The Singleton Pattern is useful when exactly one instance of a class is required, while the Factory Method Pattern provides a flexible way to create objects without exposing creation logic. Both patterns improve software design and maintainability.

## Author

Dhanu

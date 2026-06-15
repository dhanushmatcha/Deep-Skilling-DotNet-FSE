# NUnit Hands-On

## Overview

This exercise demonstrates Unit Testing using the NUnit Framework. Unit tests are used to verify the correctness of individual units of code in isolation.

---

## Objectives

* Understand Unit Testing and Functional Testing
* Learn the benefits of Automated Testing
* Understand loosely coupled and testable design
* Implement NUnit test cases
* Use TestFixture, SetUp, TearDown and TestCase attributes
* Validate calculator addition functionality using assertions

---

## Testing Types

### Unit Testing

Tests individual methods or components independently.

### Functional Testing

Validates complete functionality against business requirements.

### Automated Testing

Executes tests automatically without manual intervention.

### Performance Testing

Measures application speed, scalability and responsiveness.

---

## NUnit Attributes Used

### TestFixture

Marks a class that contains test methods.

### SetUp

Executes before each test case.

### TearDown

Executes after each test case.

### TestCase

Allows parameterized testing using different input values.

---

## Tested Method

Addition(double a, double b)

---

## Test Cases

| Input A | Input B | Expected Result |
| ------- | ------- | --------------- |
| 10      | 20      | 30              |
| 5       | 5       | 10              |
| 100     | 200     | 300             |
| -10     | 20      | 10              |

---

## Assertion Used

Assert.That(actual, Is.EqualTo(expected));

---

## Output

All test cases executed successfully and passed.

Passed: 4

Failed: 0

Skipped: 0

---

## Conclusion

NUnit provides a simple and effective way to automate unit testing. Automated tests help identify defects early, improve code quality, and ensure application reliability.

## Author

Dhanu

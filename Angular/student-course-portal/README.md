# Student Course Portal - Hands-On 4

Cognizant Digital Nurture 5.0 - Angular 20 Hands-On Exercise 4

## Objective
Implement a Template-Driven Student Enrollment Form (`/enroll`) with built-in validation directives (`required`, `minlength`, `email`), template reference variables (`#enrollForm="ngForm"`, `#nameCtrl="ngModel"`), custom CSS validation styling (`.ng-invalid.ng-touched`, `.ng-valid.ng-touched`), success alerts, and full form state resetting (`enrollForm.resetForm()`).

---

## 🛠️ Concepts & Features Implemented

### 1. Template-Driven Forms (`FormsModule`)
- **`ngForm` Directive**: Applied via `#enrollForm="ngForm"` to capture the overall form instance, valid state (`form.valid`), and object values (`form.value`).
- **`ngModel` & Two-Way Binding**: Synchronizes component properties (`formData`) with input fields using `[(ngModel)]="formData.<field>"` and unique `name` attributes.

### 2. Built-in Form Validation Rules
- **Student Name**: `required`, `minlength="3"` (Triggers error messages: `Name is required` / `Name must be at least 3 characters`).
- **Student Email**: `required`, `email` (Triggers error messages: `Email is required` / `Invalid email address`).
- **Course ID**: `required` (Triggers error message: `Course ID is required`).
- **Agree To Terms**: `required` (Triggers error message: `You must accept the terms`).
- **Validation Display Condition**: Validation messages only display when the control is touched (`controlCtrl.touched && controlCtrl.invalid`).

### 3. CSS Validation Styling
- **`.form-control.ng-invalid.ng-touched`**: Highlights invalid inputs with a red border (`#ef4444`).
- **`.form-control.ng-valid.ng-touched`**: Highlights valid inputs with a green border (`#10b981`).

### 4. Submit & Reset Actions
- **Submit Button**: Disabled when `enrollForm.invalid` is true. On click, logs `form.value` and `form.valid` to console and sets `submitted = true`.
- **Reset Button**: Invokes `enrollForm.resetForm()`, clearing all input values, resetting validation states (`touched`, `pristine`), and hiding the success message.

---

## 🚀 How to Run the Project

```bash
# 1. Build project
npx ng build

# 2. Run Karma unit tests
npx ng test --watch=false

# 3. Start local development server
npx ng serve
```

Navigate to `http://localhost:4200/enroll`.

---

## 📌 Deliverable Verification Checklist
- [x] Template-driven form accessible at `/enroll`.
- [x] Form fields created with unique `name` attributes & `[(ngModel)]`.
- [x] Submit button disabled until all required fields pass validation.
- [x] Touched invalid fields show red border (`.ng-invalid.ng-touched`).
- [x] Touched valid fields show green border (`.ng-valid.ng-touched`).
- [x] Contextual validation error messages appear only after control touch.
- [x] Success message `Enrollment request submitted successfully!` displayed on submission.
- [x] Submitted values summary displayed on screen and logged to DevTools console.
- [x] Reset button clears all fields, validation states, and success message via `enrollForm.resetForm()`.

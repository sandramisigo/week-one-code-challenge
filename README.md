# Project Overview

This repository contains three JavaScript files that perform various calculations related to student grades, speed violations, and salary deductions. Each file serves a distinct purpose:

1. **studentgrade.js** – A program to calculate and display the grade based on student marks.
2. **speeddetector.js** – A program to check if a person's driving speed exceeds the speed limit and calculates penalty points or license suspension.
3. **netsalary.js** – A program to calculate an individual's net salary after various deductions like tax (PAYE), NHIF, NSSF, SHIF, and housing levy.

## Files Description

### 1. **studentgrade.js**

This script calculates the grade of a student based on their marks. 

- **Functionality:**
  - The user is prompted to input the student's marks (between 0 and 100).
  - If the input is not a valid number, the user is prompted again.
  - Based on the marks entered, the program determines the student's grade and displays it.

- **Grade Mapping:**
  - **A**: 80 - 100
  - **B**: 60 - 79
  - **C**: 50 - 59
  - **D**: 40 - 49
  - **E**: 0 - 39

---

### 2. **speeddetector.js**

This script checks a driver's speed and determines if they are exceeding the speed limit, along with the penalty points they accumulate.

- **Functionality:**
  - The user provides a speed value.
  - The script compares the input speed with the speed limit (70 km/h).
  - If the speed is within the limit, it logs "OK."
  - If the speed exceeds the limit, the script calculates penalty points, where each 5 km/h over the limit equals 1 point.
  - If the penalty points exceed 12, the script logs "License Suspended." Otherwise, it logs the total points.

---

### 3. **netsalary.js**

This script calculates the net salary of an employee by factoring in the following deductions:
- **PAYE** (Progressive Tax based on salary)
- **NHIF** (National Health Insurance Fund)
- **NSSF** (National Social Security Fund)
- **SHIF** (Social Health Insurance Fund)
- **Affordable Housing Levy**

- **Functionality:**
  - The user inputs the basic salary and benefits.
  - The gross salary is calculated by adding the basic salary and benefits.
  - Deductions for PAYE, NHIF, NSSF, SHIF, and the Affordable Housing Levy are calculated.
  - The net salary is computed by subtracting the total deductions from the gross salary.
  - The program displays the detailed breakdown of the gross salary, PAYE, NHIF, NSSF, SHIF, housing levy, and net salary.

---


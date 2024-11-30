
// Function to calculate PAYE tax based on monthly taxable salary
function calculatePAYE(taxableSalary) {
    let tax = 0;
    if (taxableSalary <= 24000) {
        tax = taxableSalary * 0.1;
    } else if (taxableSalary <= 32333) {
        tax = (taxableSalary - 24000) * 0.25 + 2400; // First 24,000 at 10%, the rest at 25%
    } else if (taxableSalary <= 500000) {
        tax = (taxableSalary - 32333) * 0.30 + 5808; // First 32,333 at 25%, the rest at 30%
    } else if (taxableSalary <= 800000) {
        tax = (taxableSalary - 500000) * 0.325 + 14708; // First 500,000 at 30%, the rest at 32.5%
    } else {
        tax = (taxableSalary - 800000) * 0.35 + 21458; // Above 800,000 at 35%
    }
    return tax;
}

// Function to calculate NHIF deduction based on monthly salary
function calculateNHIF(salary) {
    if (salary <= 5999) return 150;
    else if (salary <= 7999) return 300;
    else if (salary <= 11999) return 400;
    else if (salary <= 14999) return 500;
    else if (salary <= 19999) return 600;
    else if (salary <= 24999) return 750;
    else if (salary <= 29999) return 850;
    else if (salary <= 34999) return 900;
    else if (salary <= 39999) return 950;
    else if (salary <= 44999) return 1000;
    else if (salary <= 49999) return 1100;
    else if (salary <= 59999) return 1200;
    else if (salary <= 69999) return 1300;
    else if (salary <= 79999) return 1400;
    else if (salary <= 89999) return 1500;
    else if (salary <= 99999) return 1600;
    else return 1700; // For salary above 100,000
}

// Function to calculate NSSF deduction based on salary
function calculateNSSF(salary) {
    let nssf = 0;
    // Tier I deduction is based on salary up to 7,000
    if (salary <= 7000) {
        nssf = salary * 0.06;
    } else if (salary <= 36000) {
        nssf = 7000 * 0.06 + (salary - 7000) * 0.06;
    }
    return nssf;
}

// Function to calculate SHIF deduction (2.75% of gross salary)
function calculateSHIF(salary) {
    return salary * 0.0275;
}

// Function to calculate Affordable Housing Levy (1.5% of gross salary from 19th March 2024)
function calculateAffordableHousingLevy(salary) {
    return salary * 0.015;
}

// Main function to calculate the net salary
function calculateNetSalary(basicSalary, benefits) {
    // Step 1: Calculate Gross Salary
    let grossSalary = basicSalary + benefits;
    
    // Step 2: Calculate PAYE tax
    let taxableSalary = grossSalary - 2400; // Subtract personal relief of 2,400 Ksh
    let paye = calculatePAYE(taxableSalary);
    
    // Step 3: Calculate NHIF deduction
    let nhif = calculateNHIF(grossSalary);
    
    // Step 4: Calculate NSSF deduction
    let nssf = calculateNSSF(grossSalary);
    
    // Step 5: Calculate SHIF deduction
    let shif = calculateSHIF(grossSalary);
    
    // Step 6: Calculate Affordable Housing Levy
    let housingLevy = calculateAffordableHousingLevy(grossSalary);
    
    // Step 7: Calculate Net Salary
    let totalDeductions = paye + nhif + nssf + shif + housingLevy;
    let netSalary = grossSalary - totalDeductions;

    // Return all calculations
    return {
        grossSalary: Number(grossSalary).toFixed(2),
        paye: Number(paye).toFixed(2),
        nhif: Number(nhif).toFixed(2),
        nssf: Number(nssf).toFixed(2),
        shif: Number(shif).toFixed(2),
        housingLevy: Number(housingLevy).toFixed(2),
        netSalary: Number(netSalary).toFixed(2)
    };
}

// Example usage
let basicSalary = 45000;  // Example basic salary
let benefits = 8000;      // Example benefits

let salaryDetails = calculateNetSalary(basicSalary, benefits);

// Display the results
console.log("Gross Salary: Ksh " + salaryDetails.grossSalary);
console.log("PAYE: Ksh " + salaryDetails.paye);
console.log("NHIF: Ksh " + salaryDetails.nhif);
console.log("NSSF: Ksh " + salaryDetails.nssf);
console.log("SHIF: Ksh " + salaryDetails.shif);
console.log("Affordable Housing Levy: Ksh " + salaryDetails.housingLevy);
console.log("Net Salary: Ksh " + salaryDetails.netSalary);

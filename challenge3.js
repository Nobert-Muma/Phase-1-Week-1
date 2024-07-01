/*Challenge 3: Net Salary Calculator (Toy Problem)

Write a program whose major task is to calculate an individual’s Net Salary by getting the inputs of basic salary and benefits. 
Calculate the payee (i.e. Tax), NHIF Deductions, NSSF Deductions, gross salary, and net salary. 
*/
let basicSalary//=parseFloat(prompt("Please enter your monthly basic salary:\n"));
let benefits//=parseFloat(prompt("How much do you get in allowances each month?"));
const personalRelief=2400;

do {
  basicSalary = parseFloat(prompt("Please enter your monthly basic salary(Use numbers only):\n"));
} while (isNaN(basicSalary));

do {
  benefits = parseFloat(prompt("How much do you get in allowances each month?(Use numbers only)"));
} while (isNaN(benefits));

//Calculating gross salary
grossSalary=grossSal(basicSalary, benefits);
// Calculating taxable income 
taxIncome=taxableIncome();
// Calculating PAYE 
paye=tax();
// Calculating NHIF deduction
nhifDeduction = nhifDeductions(grossSalary);
// Calculating NSSF deduction
nssfDeduction = nssfDeductions(basicSalary);
// Calculating net salary
netPay = netSalary(grossSalary, paye, nhifDeduction, nssfDeduction);

function grossSal(basicSalary, benefits) {
  return basicSalary+benefits;
}

function taxableIncome() {
  return grossSalary-personalRelief;
}
//PAYE
function tax() {
  if (taxIncome > 0 && taxIncome <= 24000) {
    paye = taxIncome * 0.1;
  } else if (taxIncome >= 24001 && taxIncome <= 32333) {
    paye = taxIncome * 0.25;
  } else if (taxIncome >= 32334 && taxIncome <= 500000) {
    paye = taxIncome * 0.30;
  } else if (taxIncome >= 500001 && taxIncome <= 800000) {
    paye = taxIncome * 0.325;
  } else if (taxIncome > 800000) {
    paye = taxIncome * 0.35;
  }
  return paye;
}
//NHIF Deductions
function nhifDeductions(grossSalary) {
if (grossSalary > 0 && grossSalary <= 5999) {
    nhifDeduction=150;
    return nhifDeduction;
} else if (grossSalary >= 6000 && grossSalary <= 7999) {
    nhifDeduction=300;
    return nhifDeduction;
} else if (grossSalary >= 8000 && grossSalary <= 11999) {
    nhifDeduction=400;
    return nhifDeduction;
} else if (grossSalary >= 12000 && grossSalary <= 14999) {
    nhifDeduction=500;
    return nhifDeduction;
} else if (grossSalary >= 15000 && grossSalary <= 19999) {
    nhifDeduction=600;
    return nhifDeduction;
} else if (grossSalary >= 20000 && grossSalary <= 24999) {
    nhifDeduction=750;
    return nhifDeduction;
} else if (grossSalary >= 25000 && grossSalary <= 29999) {
    nhifDeduction=850;
    return nhifDeduction;
} else if (grossSalary >= 30000 && grossSalary <= 34999) {
    nhifDeduction=900;
    return nhifDeduction;
} else if (grossSalary >= 35000 && grossSalary <= 39999) {
    nhifDeduction=950;
    return nhifDeduction;
} else if (grossSalary >= 40000 && grossSalary <= 44999) {
    nhifDeduction=1000;
    return nhifDeduction;
} else if (grossSalary >= 45000 && grossSalary <= 49999) {
    nhifDeduction=1100;
    return nhifDeduction;
} else if (grossSalary >= 50000 && grossSalary <= 59999) {
    nhifDeduction=1200;
    return nhifDeduction;
} else if (grossSalary >= 60000 && grossSalary <= 69999) {
    nhifDeduction=1300;
    return nhifDeduction;
} else if (grossSalary >= 70000 && grossSalary <= 79999) {
    nhifDeduction=1400;
    return nhifDeduction;
} else if (grossSalary >= 80000 && grossSalary <= 89999) {
    nhifDeduction=1500;
    return nhifDeduction;
} else if (grossSalary >= 90000 && grossSalary <= 99999) {
    nhifDeduction=1600;
    return nhifDeduction;
} else if (grossSalary > 100000) {
    nhifDeduction=1700;
    return nhifDeduction;
}
}
//NSSF Deductions
function nssfDeductions(basicSalary) {
  return basicSalary * 0.06;
}
//Net salary
function netSalary(grossSalary, paye, nhif, nssf) {
  return grossSalary-(paye+nhif+nssf);
}

console.log("PAYE:\t" + Math.floor(paye*100)/100+"\n"+"NHIF Deductions: \t"+nhifDeduction+"\n"+
"NSSF Deductions: \t"+ Math.floor(nssfDeduction*100)/100+"\n"+
"Gross Salary: \t"+grossSalary+"\n"+"Net Salary: \t"+netPay);
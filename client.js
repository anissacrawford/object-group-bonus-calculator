const employees = [
  {
    name: 'Atticus',
    employeeNumber: '2405',
    annualSalary: '47000',
    reviewRating: 3
  },
  {
    name: 'Jem',
    employeeNumber: '62347',
    annualSalary: '63500',
    reviewRating: 4
  },
  {
    name: 'Scout',
    employeeNumber: '6243',
    annualSalary: '74750',
    reviewRating: 5
  },
  {
    name: 'Robert',
    employeeNumber: '26835',
    annualSalary: '66000',
    reviewRating: 1
  },
  {
    name: 'Mayella',
    employeeNumber: '89068',
    annualSalary: '35000',
    reviewRating: 1
  }
];

// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT

// This problem is massive! Break the problem down, take small steps, and test as you go.
// What is the fewest lines of code I can write and test to get just a little closer?

// This is not a race. Everyone on your team should understand what is happening.
// Ask questions when you don't.
//-----------------------------------------


// function to calculate bonusPercent
function bonusPercentageFunc( employee ) {
  if (employee.reviewRating <= 2){
    return 0;
  }
  return 2;
}
// function that returns employeeBonus object
function employeeBonus( employee ) {
  let name = employee.name;
  let bonusPercentage = bonusPercentageFunc( employee );
  let totalBonus = employee.annualSalary * bonusPercentage;
  let totalCompensation = employee.annualSalary + totalBonus;

  let employeeBonusObject = {
    name: name,
    bonusPercentage: bonusPercentage,
    totalCompensation: totalCompensation,
    totalBonus: totalBonus
  }

  return employeeBonusObject;
}


//loop through list of employees
for (let employee of employees) {
  // log employeeBonus objects for each employee
  console.log(employeeBonus( employee ));
}

console.log( employees );

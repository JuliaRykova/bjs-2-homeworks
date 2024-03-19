"use strict"
function solveEquation(a, b, c) {
  let arr = [];
  let discriminant;
  let calculateDiscriminant = (b ** 2) - 4 * a * c;
  if (calculateDiscriminant < 0) {
  } else if (calculateDiscriminant === 0) {
    discriminant = -b / (2 * a);
    arr.push(discriminant);
  } else if (calculateDiscriminant > 0) {
    discriminant = (-b + Math.sqrt(calculateDiscriminant)) / (2 * a);
    arr.push(discriminant);
    discriminant = (-b - Math.sqrt(calculateDiscriminant)) / (2 * a);
    arr.push(discriminant);
  }
  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  let monthlyInterestRate = percent / 100 / 12;
  let loanBalance = amount - contribution;
  let monthlyPayment = loanBalance * (monthlyInterestRate + monthlyInterestRate / (Math.pow(1 + monthlyInterestRate, countMonths) - 1));
  let totalPayment = monthlyPayment * countMonths;
  return +totalPayment.toFixed(2);
}
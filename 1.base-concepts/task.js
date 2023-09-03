"use strict"
function solveEquation(a, b, c) {
  let arr = [ ];
  let D = b**2 - 4*a*c;
  if (D > 0) {
      arr = [(-b + Math.sqrt(D) )/(2*a), (-b - Math.sqrt(D) )/(2*a)]
    }
  else if (D === 0) {
     arr = [-b / (2*a)]
  }
  return arr;
}
solveEquation(9, -30, 25)
solveEquation(1, 5, 4)
solveEquation(1, 2, 1)
solveEquation(1, 2, 10)

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  let mounthPercent = percent / 100
  let bodyCredit = amount - contribution
  let mounthPay = bodyCredit * ((mounthPercent / 12) + ((mounthPercent / 12) / (((1 + (mounthPercent / 12))**countMonths) - 1)))
  let totalSum = (mounthPay * countMonths).toFixed(2)
  return Number(totalSum);
}
calculateTotalMortgage(10, 0, 50000, 12)
calculateTotalMortgage(10, 1000, 50000, 12)
calculateTotalMortgage(10, 20000, 20000, 48)
calculateTotalMortgage(10, 0, 10000, 36)
calculateTotalMortgage(15, 0, 10000, 36)
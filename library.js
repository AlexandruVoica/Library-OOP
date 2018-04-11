// this module holds useful individual functions

export function convertAmountToString (amount, largeUnit, smallUnit) {
  // desired outcome is a string similar to '1h 28m'
  // since the amount is going to be a decimal, rounding the number down will give the number of hours for the string
  let largeAmount = Math.floor(amount);
  // the number of minutes is the rounded result of multiplying the mantissa of the amount by 60
  let smallAmount = Math.round((amount - largeAmount) * 60);

  return `${largeAmount}${largeUnit} ${smallAmount}${smallUnit}`;
}


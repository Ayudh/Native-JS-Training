function rentalCarCost(d) {
  let totalAmount = d * 40;
  if (d >= 7) {
    totalAmount -= 50;
  } else if (d >= 3) {
    totalAmount -= 20;
  }
  return totalAmount;
}
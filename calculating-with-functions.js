function zero(op) {
  return operation(op, 0);
}
function one(op) {
  return operation(op, 1);
}
function two(op) {
  return operation(op, 2);
}
function three(op) {
  return operation(op, 3);
}
function four(op) {
  return operation(op, 4);
}
function five(op) {
  return operation(op, 5);
}
function six(op) {
  return operation(op, 6);
}
function seven(op) {
  return operation(op, 7);
}
function eight(op) {
  return operation(op, 8);
}
function nine(op) {
  return operation(op, 9);
}

function plus(secondOp) {
  return firstOp => firstOp + secondOp;
}
function minus(secondOp) {
  return firstOp => firstOp - secondOp;
}
function times(secondOp) {
  return firstOp => firstOp * secondOp;
}
function dividedBy(secondOp) {
  return firstOp => parseInt(firstOp / secondOp);
}

function operation(op, value) {
  if (!op) return value;
  return op(value);
}

// https://www.codewars.com/kata/calculating-with-functions/train/javascript
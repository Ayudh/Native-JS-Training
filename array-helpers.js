Array.prototype.square = function() {
  return this.map(val => val * val);
}

Array.prototype.cube = function() {
  return this.map(val => val * val * val);
}

Array.prototype.average = function() {
  let average;
  if (this.length === 0) {
    average = NaN;
  } else {
    average = this.sum() / this.length;
  }
  return average;
}

Array.prototype.sum = function() {
  return this.reduce((prev, curr) => {
    return prev + curr;
  }, 0);
}

Array.prototype.even = function() {
  return this.filter(val => val % 2 === 0);
}

Array.prototype.odd = function() {
  return this.filter(val => val % 2 !== 0);
}

// http://www.codewars.com/kata/array-helpers
function prefill(n, v) {
  if (isNaN(n) || Math.abs(n) === Infinity || typeof n === 'boolean' || n < 0 || parseInt(n) != n) {
    throw new TypeError(`${n} is invalid`);
  }
  return (new Array(parseInt(n)).fill(v));
}

// http://www.codewars.com/kata/prefill-an-array
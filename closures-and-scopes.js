function createFunctions(n) {
  var callbacks = [];

  for (let i = 0; i < n; i++) {
    callbacks.push(function () {
      return i;
    });
  }

  return callbacks;
}

// https://www.codewars.com/kata/closures-and-scopes/train/javascript
function compose() {
  let funcArray = Array.from(arguments).reverse();
  return function(arg) {
    return funcArray.reduce((prev, curr) => {
      return curr(prev);
    }, arg);
  }
}

// https://www.codewars.com/kata/function-composition-1/train/javascript
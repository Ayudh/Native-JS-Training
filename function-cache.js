function cache(func) {
  const cacheObject = [];
  return function (arg1, arg2) {
    let result;
    let c = cacheObject.filter(v => v.arg1 === arg1 && v.arg2 === arg2);
    if (c.length !== 0) {
      result = c[0].value;
    } else {
      result = func(arg1, arg2);
      cacheObject.push({
        arg1: arg1,
        arg2: arg2,
        value: result
      });
    }
    return result;
  }
}

// https://www.codewars.com/kata/function-cache/train/javascript
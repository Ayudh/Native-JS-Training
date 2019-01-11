function add(n) {
  let res = function(a) {
    return add(n + a);
  }
  res.valueOf = function () {
    return n;
  }
  return res;
}
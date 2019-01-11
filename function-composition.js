function compose(f, g) {
  return (...arguments) => f(g(...arguments));
}
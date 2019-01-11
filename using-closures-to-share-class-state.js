// Let's make a Cat constructor!
var Cat = (function () {
  let totalWeight = 0;
  let num = 0;
  let Cat = function (name, weight) {
    if (!name || !weight) {
      throw new Error();
    }
    num += 1;
    this.name = name;
    let _weight = weight;
    totalWeight += _weight;
    Object.defineProperty(this, "weight", {
      get () {
       return _weight;
      },
      set(newWeight) {
        totalWeight += (newWeight - _weight);
        _weight = newWeight;
      },
    });
  }

  Cat.averageWeight = function () {
    return totalWeight / num;
  }

  return Cat;
}());

// https://www.codewars.com/kata/using-closures-to-share-class-state/train/javascript
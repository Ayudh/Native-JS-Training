// return the nested property value if it exists,
// otherwise return undefined
Object.prototype.hash = function (string) {
  let value = this;
  const props = string.split('.');
  for (let prop of props) {
    value = value[prop];
    if (value == null) {
      break;
    }
  }
  return value;
}

// http://www.codewars.com/kata/extract-nested-object-reference
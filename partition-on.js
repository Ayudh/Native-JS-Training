// partition the items array so that all values for which pred returns true are
// at the end, returning the index of the first true value
function partitionOn(pred, items=[]) {
  let trueItems = items.filter(pred);
  let falseItems = items.filter((value) => !pred(value));

  items.splice(0, falseItems.length, ...falseItems);
  items.splice(falseItems.length, trueItems.length, ...trueItems);

  return falseItems.length;
}

// https://www.codewars.com/kata/partition-on/train/javascript
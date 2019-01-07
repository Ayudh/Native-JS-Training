function countWords(str) {
  return str.split(/\s/g).filter(Boolean).length;
}

// https://www.codewars.com/kata/word-count/train/javascript
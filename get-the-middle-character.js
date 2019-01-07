function getMiddle(s="") {
  const length = s.length;
  let ans;
  if (length % 2 == 0) {
    ans = s.charAt(length / 2 - 1) + s.charAt(length / 2);
  } else {
    ans = s.charAt(length / 2);
  }
  return ans;
}

// https://www.codewars.com/kata/get-the-middle-character/train/javascript
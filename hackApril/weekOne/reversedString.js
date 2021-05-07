function Reverse(str) {
  let result = "";
  for (let i = 0; i < str.length; i++) {
    result = str[i] + result;
  }

  return result;
}
console.log(Reverse("bashir"));




//use built-in javascript short-hand methods

function ReverseString(str) {
  return str.split("").reverse().join("");
}
console.log(ReverseString("bashir"));

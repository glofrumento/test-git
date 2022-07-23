// Esempio di closure in JavaScript

function f(m) {
  let n = 5;

  if (m > 0) {
    n += m;
  }
  return function closure() {
           return n;
         }
}

let a = f(4);
let c = f(0);
let b = f(14);

console.log(b());
console.log(c());
console.log(a());

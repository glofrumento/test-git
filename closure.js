// Esempio di closure in JavaScript

function f(par) {
  let n = 5;

  if (par > 0) {
    n += par;
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

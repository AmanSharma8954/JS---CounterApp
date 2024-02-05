const dec = document.getElementById("dec");
const inc = document.getElementById("inc");
const reset = document.getElementById("reset");
const result = document.getElementById("result");

let curr = 0
;

function resetAll() {
  curr = 0;
  result.innerText = curr;
}

function increment() {
  curr += 1;
  result.innerText = curr;
}

function decrement() {
  curr -= 1;
  result.innerText = curr;
}

reset.addEventListener("click", resetAll);
dec.addEventListener("click", decrement);
inc.addEventListener("click", increment);

console.log(curr);

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

function sqrt(a) {
  return Math.sqrt(a);
}

function sqrt10() {
  return Math.sqrt(10);
}

function primesTill(n) {
  // Create a boolean array
  // "prime[0..n]" and
  // initialize all entries
  // it as true. A value in
  // prime[i] will finally be
  // false if i is Not a
  // prime, else true.
  prime = Array.from({ length: n + 1 }, (_, i) => true);

  for (p = 2; p * p <= n; p++) {
    // If prime[p] is not changed, then it is a
    // prime
    if (prime[p] == true) {
      // Update all multiples of p
      for (i = p * p; i <= n; i += p) prime[i] = false;
    }
  }

  const res = [];
  // Print all prime numbers
  for (i = 2; i <= n; i++) {
    if (prime[i] == true) res.push(i);
  }

  return res;
}

module.exports = { add, subtract, multiply, divide, sqrt, sqrt10, primesTill };

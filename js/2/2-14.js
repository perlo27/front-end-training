// rewritten function using ? or ||

function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    return confirm("Do you have your parents permission to access this page?");
  }
}

// rewritten

function checkAge(age) {
  return age > 18
    ? true
    : confirm("Do you have your parents permission to access this page?");
}

function checkAge(age) {
  return (
    age > 18 ||
    confirm("Do you have your parents permission to access this page?")
  );
}

// function min

function min(a, b) {
  return a <= b ? a : b;
}

// function pow

function pow(x, n) {
  let result = 1;
  for (let i = 0; i < n; i++) {
    result *= x;
  }
  return result;
}

// alternative version

function pow(x, n) {
  return x ** n;
}

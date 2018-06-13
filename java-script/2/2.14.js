function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    return confirm('Do you have your parents permission to access this page?');
  }
}

//using ?

function checkAge2(age) {
  return (age > 18) ? true : confirm('Do you have your parents permission to access this page?');
}

//using OR ||

function checkAge3(age) {
  return (age > 18) || confirm('Do you have your parents permission to access this page?');
}
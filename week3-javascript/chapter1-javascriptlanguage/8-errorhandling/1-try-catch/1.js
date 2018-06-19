// Cleanup in finally should be preferred because it takes place even if
// another error is thrown in the catch block or the method returns before
// reaching the end
{
  try {
  work work
} catch (e) {
  handle errors
} finally {
  cleanup the working space
}
}

{
  try {
  work work
} catch (e) {
  handle errors
}

cleanup the working space
}

export function ask(isConfirmed, yes, no) {
  if (isConfirmed) {
    return yes();
  } else {
    return no();
  }
}

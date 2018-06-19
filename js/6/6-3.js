export const inBetween = (a, b) => {
  return x => (x >= a && x <= b) ? true : false;
};

export const inArray = (arr) => {
  return x => arr.includes(x) ? true : false;
}

export const byField = (fieldName) => {
  return (a, b) => a[fieldName] > b[fieldName] ? 1 : -1; 
}



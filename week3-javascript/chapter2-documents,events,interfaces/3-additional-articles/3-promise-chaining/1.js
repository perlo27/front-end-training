promise.then(f1, f2);

promise.then(f1).catch(f2);

// checked the solution, they are not equal since f1 might throw an exception
// that will not be caught, in second line errors thrown from f1 will be
// caught by f2 

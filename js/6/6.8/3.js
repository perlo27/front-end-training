let i = 0;

setTimeout(() => console.log(i), 100); // Any setTimeout will run only after the current code has finished.

// assume that the time to execute this function is >100ms
for (let j = 0; j < 100000000; j++) {
    i++;
}
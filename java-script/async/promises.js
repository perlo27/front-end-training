// let promise = new Promise(function (resolve, reject) {
//     setTimeout(() => resolve("done"), 1000);
// });

// let promise = new Promise(function(resolve, reject) {
//     // after 1 second signal that the job is finished with an error
//     reject(new Error("Whooxddps!"));
//   });

let promise = new Promise(function (resolve, reject) {
    setTimeout(() => resolve("done!"), 1000);
});

// resolve runs the first function in .then
promise.then(
    result => console.log(result), // shows "done!" after 1 second
    error => console.log(error) // doesn't run
);
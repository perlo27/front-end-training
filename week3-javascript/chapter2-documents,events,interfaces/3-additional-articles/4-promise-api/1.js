{
  let urls = [
  'https://api.github.com/users/iliakan',
  'https://api.github.com/users/remy',
  'http://no-such-url'
];

Promise.all(urls.map(url => fetch(url)).map(promise => new Promise(function(resolve,reject){
  promise.then(resp => resolve(resp)).catch(error => resolve(error))
})))
  // solution in the website :
  // Promise.all(
  //   urls.map(url => fetch(url).catch(err => err))
  // )
  
  // for each response show its status
  .then(responses => { // (*)
    for(let response of responses) {
      console.log(`${response.url}: ${response.status}`);
    }
  });
}

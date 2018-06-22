let urls = [
    'https://api.github.com/users/iliakan',
    'https://api.github.com/users/remy',
    'http://no-such-url'
  ];
  
  Promise.all(...) // your code to fetch URLs...
    // ...and pass fetch errors as members of the resulting array...
    .then(responses => {
      // 3 urls => 3 array members
      alert(responses[0].status); // 200
      alert(responses[1].status); // 200
      alert(responses[2]); // TypeError: failed to fetch (text may vary)
    });
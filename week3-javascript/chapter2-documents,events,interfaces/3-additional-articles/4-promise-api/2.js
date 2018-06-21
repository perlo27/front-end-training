{
  let urls = [
    'https://api.github.com/users/iliakan',
    'https://api.github.com/users/remy',
    'https://api.github.com/users/jeresig'
  ];

  // make fetch requests
  Promise.all(urls.map(url => fetch(url).catch(err => err)))
    // map each response to response.json()
    .then(responses => Promise.all(
      responses.map(r => new Promise(function(resolve,reject){
        try{
          r.json().then(jsonResp => resolve(jsonResp)).catch(jsonError => resolve(jsonError));
        } catch (error) {
          resolve(error);
        }
      }))
    ))
    
    // solution in the website
    // .then(responses => Promise.all(
    //     responses.map(r => r instanceof Error ? r : r.json().catch(err => err))
    //   ))


    // show name of each user
    .then(users => {  // (*)
      for(let user of users) {
        console.log(user.name);
      }
    });

}

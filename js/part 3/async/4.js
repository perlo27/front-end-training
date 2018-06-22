const fetch = require("node-fetch");

function loadJson(url) {
  return fetch(url).then(response => {
    if (response.status == 200) {
      return response.json();
    } else {
      throw new Error(response.status);
    }
  });
}

async function loadJsonAsync(url) {
  let result = fetch(url);
  await result;
  if (result.status == 200) {
    return result.json();
  } else {
    throw new Error(result.status);
  }
}

loadJsonAsync("no-such-user.json") // (3)
  .catch(() => console.log("Error: 404")); // Error: 404

class HttpError extends Error {
  constructor(response) {
    super(`${response.status} for ${response.url}`);
    this.name = "HttpError";
    this.response = response;
  }
}

function loadJson(url) {
  return fetch(url).then(response => {
    if (response.status == 200) {
      return response.json();
    } else {
      throw new HttpError(response);
    }
  });
}

// Ask for a user name until github returns a valid user
async function demoGithubUser() {
    const name = "iliakan";
    
    while(true) {
        try {
            let user = await loadJson(`https://api.github.com/users/${name}`)
            console.log(`Full name: ${user.name}.`);
            break;
        } catch (err) {
            if (err instanceof HttpError && err.response.status == 404) {
                console.log("No such user, please reenter.");
            } else {
                throw err;
            }
        }
    }
    
}

demoGithubUser();

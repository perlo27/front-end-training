const fetch = require('node-fetch-json');

class HttpError extends Error { // (1)
    constructor(response) {
        super(`${response.status} for ${response.url}`);
        this.name = 'HttpError';
        this.response = response;
    }
}

function loadJson(url) { // (2)
    return fetch(url)
        .then(response => {
            if (response.status == 200) {
                return response.json();
            } else {
                throw new HttpError(response);
            }
        })
}

loadJson('no-such-user.json') // (3)
    .catch(console.log); // HttpError: 404 for .../no-such-user.json
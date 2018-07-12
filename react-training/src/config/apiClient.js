import { baseUrl } from "./config";

export const callApi = ({ query, searchBy }) => {
  return fetch(`${baseUrl}?search=${query}&searchBy=${searchBy}&limit=9`)
    .then(response => response.json())
    .then(({data : movies}) => ({
      response: movies,
      err: null
    }))
    .catch(err => ({
      err,
      response: null
    }));
};

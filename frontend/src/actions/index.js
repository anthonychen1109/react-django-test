import axios from 'axios';

const BASE_URL = ('http://127.0.0.1:8000');
export const FETCH_USER = 'FETCH_USER';
export const POST_USER = 'POST_USER';

export function fetchUser() {
  const URL = `${BASE_URL}/users`;
  const request = axios.get(URL)

  return {
    type: FETCH_USER,
    payload: request
  }
}

export function postUser(firstName) {
  const URL = `${BASE_URL}/users`
  const request = axios.post(URL, {
    "first_name": firstName,
    "last_name": "testing"
  }).then(response => console.log(response))
    .catch(error => console.log(error))

  return {
    type: POST_USER,
    payload: request
  }
}

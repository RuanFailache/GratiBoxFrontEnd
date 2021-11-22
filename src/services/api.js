import axios from 'axios';

const BASE_URL = 'https://app-gratibox.herokuapp.com';

export const registerNewUser = (body) => (
  axios.post(`${BASE_URL}/sign-up`, body)
);

export const checkUserToSignIn = (body) => (
  axios.post(`${BASE_URL}/sign-in`, body)
);

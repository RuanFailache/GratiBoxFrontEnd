import axios from 'axios';

const BASE_URL = 'http://localhost:4000';

export const registerNewUser = (body) => (
  axios.post(`${BASE_URL}/sign-up`, body)
);

export const checkUserToSignIn = (body) => (
  axios.post(`${BASE_URL}/sign-in`, body)
);

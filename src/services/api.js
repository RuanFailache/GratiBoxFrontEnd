import axios from 'axios';

const BASE_URL = 'http://localhost:4000';

const makeConfig = (token) => ({
  headers: {
    authorization: `Bearer ${token}`,
  },
});

export const registerNewUser = (body) => (
  axios.post(`${BASE_URL}/sign-up`, body)
);

export const checkUserToSignIn = (body) => (
  axios.post(`${BASE_URL}/sign-in`, body)
);

export const registerNewPlan = (body, token) => (
  axios.post(`${BASE_URL}/plan`, body, makeConfig(token))
);

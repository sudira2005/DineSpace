import api from './api';

export const registerUser = async ({ name, email, password }) => {
  const { data } = await api.post('/auth/register', { fullName: name, email, password });
  return data;
};

export const loginUser = async (credentials) => {
  const { data } = await api.post('/auth/login', credentials);
  localStorage.setItem('dinespace_token', data.token);
  localStorage.setItem('dinespace_user', JSON.stringify(data.user));
  return data;
};

export const logoutUser = () => {
  localStorage.removeItem('dinespace_token');
  localStorage.removeItem('dinespace_user');
};

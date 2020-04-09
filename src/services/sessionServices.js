import { getClient } from '../apiClient';

export const loginCredentials = async ({ userName, password }) => {
  const res = await getClient().post(
    '/authentication',
    {
      email: userName,
      password: password,
      strategy: 'local'
    }
  );

  if (res.status !== 201) {
    throw new Error('Incorrect user or password');
  }

  return res.data;
};

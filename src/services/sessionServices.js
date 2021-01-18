import { getClient } from '../apiClient';
import getMockUser from './dataMock';

export const loginCredentials = async ({ email, userName, password }) => {

  const values = window.location.search;
  const urlParams = new URLSearchParams(values);
  const noApiCall = urlParams.get('noApiCall');

  let res;
  if (noApiCall) {
      res = getMockUser({ email, userName });
  } else {
    res = await getClient().post(
      '/authentication',
      {
        email: email || userName,
        password: password,
        strategy: 'local'
      }
    );
  }

  if (!res?.data?.user?.role) {
    let role;
    switch (res?.data?.user?.id) {
      case 3:
        role = 'admin';
        break;

      case 4:
        role = 'dev';
        break;

      default:
        role = 'user';
        break;
      }

      res.data.user.role = role;
  }

  if (res.status !== 201) {
    throw new Error('Incorrect user or password');
  }

  return res.data;
};

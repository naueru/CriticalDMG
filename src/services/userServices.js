import { getClient } from '../apiClient';
import getMockUser from './dataMock';

export const fetchUser = async (userId) => {
  const values = window.location.search;
  const urlParams = new URLSearchParams(values);
  const noApiCall = urlParams.get('noApiCall');

  let res;
  if (noApiCall) {
      res = getMockUser({ id: userId });
  } else {
      res = await getClient().get(
    `/users/${userId}`
  )};

  // TODO handle errors status

  // TODO Temporary user role. It does not exist in the DB.
  if (!res?.data?.role) {
    let role;
    switch (res?.data?.id) {
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

      res.data.role = role;
  }

  return res.data;
};

export const register = async ({email, password, userName, alterEgo, icon}) => {
  const data = {
    email,
    userName,
    alterEgo,
    password,
    icon,
  };
  const res = await getClient().post(`/users/`, data);

  // TODO handle errors status
  return res.data;
};

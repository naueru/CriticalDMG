import { getClient } from '../apiClient';

export const fetchUser = async (userId) => {
  const res = await getClient().get(
    `/users/${userId}`
  );

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
    icon
  };
  const res = await getClient().post(`/users/`, data);

  return res.data;
};

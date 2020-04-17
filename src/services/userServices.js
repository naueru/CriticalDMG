import { getClient } from '../apiClient';

export const fetchUser = async (userId) => {
  const res = await getClient().get(
    `/users/${userId}`
  );

  // TODO handle errors status

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

  // TODO handle errors status

  return res.data;
};

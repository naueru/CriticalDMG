import { getClient } from '../apiClient';

export const fetchUser = async (userId) => {
  const res = await getClient().get(
    `/users/${userId}`
  );

  // TODO handle errors status

  return res.data;
};
import { users } from '../mocks/sessionMocks';
export const loginCredentials = ({userName, password}) => {
  const user = users.find(user => user.Name === userName);
  if (user && user.password === password) {
    Promise.resolve(user);
  } else {
    Promise.reject('Incorrect user or password');
  }
  return;
};
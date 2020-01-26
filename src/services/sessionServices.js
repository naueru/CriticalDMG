import { users } from '../mocks/sessionMocks';
export const loginCredentials = ({userName, password}) => {
  const user = users.find(user => {
    return user.userName === userName
  });

  if (user && user.password === password) {
    return Promise.resolve(user);
  } else {
    return Promise.reject('Incorrect user or password');
  }
};

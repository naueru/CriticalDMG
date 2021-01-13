import { getClient } from '../apiClient';
import dataMock from './dataMock';

export const loginCredentials = async ({ email, userName, password }) => {

const valores = window.location.search;
console.log('Valores is ===>', valores);
const urlParams = new URLSearchParams(valores);
console.log('urlParams is ===>', urlParams.get('noApiCall'));
const getParams = urlParams.get('noApiCall');
console.log(urlParams.has('noApiCall'));

  let res;

  if (!getParams) {
    res = {data: dataMock, status: 201};
    console.log('DataMock')
  } else {
    res = await getClient().post(
      '/authentication',
      {
        email: email || userName,
        password: password,
        strategy: 'local'
      }
    );
    console.log('API')
  }
  console.log('Paso 1 despues del if')
  console.log('Paso 1 despues del if > switch', res?.data?.user?.id, `${res?.data?.user?.id}`)

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
  console.log('Paso 2 despues del if')
  console.log('Paso 2 despues del if > switch', res?.data?.user?.role)

  if (res.status !== 201) {
    throw new Error('Incorrect user or password');
  }
  console.log('Respuesta:',res.data);
  return res.data;
};
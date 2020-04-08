const TOKEN_NAME = 'CRITICAL_DMG_TOKEN';

export const getAuthorizationToken = () => localStorage.getItem(TOKEN_NAME);

export const setAutohrizationToken = token => localStorage.setItem(TOKEN_NAME, token);

export const isLoggedIn = () => localStorage.getItem(TOKEN_NAME) !== null;

export const removeAutohrizationToken = () => localStorage.removeItem(TOKEN_NAME);

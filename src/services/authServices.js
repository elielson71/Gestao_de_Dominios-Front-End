export const TOKEN_KEY = '&app-token';
export const ID_USUARIO = '&id-usuario';
export const LOGIN_USUARIO = '&login-usuario';
export const USER_TYPE = '&user-type';

//export const loginToken = (token) => { localStorage.setItem(TOKEN_KEY,token); }
export const loginToken = (token) => { sessionStorage.setItem(TOKEN_KEY,token); }
export const logout = () => { sessionStorage.clear() };

export const setIdUsuario = (id)=> localStorage.setItem(ID_USUARIO,id);
export const getIdUsuario = () => localStorage.getItem(ID_USUARIO);

export const setLoginUsuario = (login) => localStorage.setItem(LOGIN_USUARIO,login);
export const getLoginUsuario = () => localStorage.getItem(LOGIN_USUARIO);

export const getToken = () => sessionStorage.getItem(TOKEN_KEY)
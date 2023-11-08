export const login = (user, token) => {
  return {
    type: 'LOGIN',
    payload: { user, token },
  };
};
export const register = (name, email) => {
    console.log(name, email)
  return {
    type: 'REGISTER',
    payload: { name, email },
  };
};
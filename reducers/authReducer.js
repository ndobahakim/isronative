const initialState = {
  user: null,
  isAuthenticated: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN':
      const { user, token } = action.payload;
      return {
        ...state,
        user,
        isAuthenticated: true,
        token: token
      }

    case 'REGISTER':
      const { name, email } = action.payload;
      return {
        ...state,
        user: { name, email },
        isAuthenticated: true,
      }

    default:
      return state;
  }
};

export default authReducer;

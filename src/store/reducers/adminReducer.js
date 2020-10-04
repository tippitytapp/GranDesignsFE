const initialState = {
  isLoggingIn: false,
  isLoggedIn: false,
  isLogginError: false,
  isLogginErrorMessage: "",
  token: ""
};

export const adminReducer = (state = initialState, action) => {
  switch ((action.type)) {
    case "LOGIN_START_A":
      return {
        ...state,
        isLoggingIn: true,
      };
    case "LOGIN_SUCC_A":
      return {
        ...state,
        isLoggingIn: false,
        isLoggedIn: true,
        isLogginError: false,
        isLogginErrorMessage: "",
        token: action.payload
      };
    case "LOGIN_FAIL_A":
      return {
        ...state,
        isLoggingIn: false,
        isLoggedIn: false,
        isLogginError: true,
        isLogginErrorMessage: action.payload,
          }
      default:
          return state
  }
};

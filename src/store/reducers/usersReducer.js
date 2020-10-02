const initialState = {
    isLoggingIn: false,
    isLoggedIn: false,
    isLogginError: false,
    isLogginErrorMessage: "",
    cart: [],
    liked: []
}

export const usersReducer = (state = initialState, action) => { 
    switch (action.type) {
        case 'LOGIN_START':
            return {
                ...state,
                isLoggingIn: true
            }
        case 'LOGIN_SUCC':
            return {
              ...state,
              isLoggingIn: false,
              isLoggedIn: true,
              isLogginError: false,
              isLogginErrorMessage: ""
            }
        case 'LOGIN_FAIL':
            return {
              ...state,
              isLoggingIn: false,
              isLoggedIn: false,
              isLogginError: true,
              isLogginErrorMessage: action.payload
            }
        case 'ADD_TO_CART':
            return {
                ...state,
                cart: [...state.cart, action.payload]
            }
        case 'REM_FROM_CART':
            return {
                ...state,
                cart: [state.cart.filter(pro => pro.id !== action.payload)]
            }
        default:
            return state
    }
}
export const logUserIn = () => {
  return (dispatch) => {
      dispatch({ type: 'LOGIN_START' })
      dispatch({ type: 'LOGIN_SUCC' })
      dispatch({ type: 'LOGIN_FAIL' })
  };
};

export const addToCart = (product) => { 
    return (dispatch) => { 
        dispatch({type: 'ADD_TO_CART', payload: product })
    }
}

export const removeFromCart = (id) => { 
    return (dispatch) => { 
        dispatch({type: 'REM_FROM_CART', payload: id})
    }
}
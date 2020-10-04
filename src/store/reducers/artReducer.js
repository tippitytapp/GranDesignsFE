const initialState = {
    isLoading: false,
    isError: false,
    isErrorMessage: "",
    art: []
}

export const artReducer = (state = initialState, action) => { 
    switch (action.type) { 
        case "FETCH_ART_START":
            return {
                ...state,
                isLoading: true
            }
        case "FETCH_ART_SUCC":
            return {
                ...state,
                isLoading: false,
                isError: false,
                isErrorMessage: "",
                art: action.payload
            }
        case "FETCH_ART_FAIL":
            return {
                ...state,
                isLoading: false,
                isError: true,
                isErrorMessage: action.payload
            }
        default:
            return state
    }
}
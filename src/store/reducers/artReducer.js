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
        case "ADD_ART_START":
            return {
                ...state,
                isLoading: true
            }
        case "ADD_ART_SUCC":
            return {
                ...state,
                isLoading: false,
                art: action.payload,
                isError: false,
                isErrorMessage: ""
            }
        case "ADD_ART_FAIL":
            return {
                ...state,
                isLoading: false,
                isError: true,
                isErrorMessge: action.payload
            }
        case "FILTER_START":
            return {
                state,
                isLoading:true
            }
        case "FILTER_SUCC":
            return {
              ...state,
              isLoading: false,
              art: action.payload,
              isError: false,
              isErrorMessage: "",
            }
        case "FILTER_FAIL":
            return {
              ...state,
              isLoading: false,
              isError: true,
              isErrorMessge: action.payload,
            }
        default:
            return state
    }
}
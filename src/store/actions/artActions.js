import { axiosWithAuth } from "../../utils/axiosWithAuth";

export const getArt = () => {
  return (dispatch) => {
    dispatch({ type: "FETCH_ART_START" });
    axiosWithAuth()
      .get("/art")
      .then((res) => dispatch({ type: "FETCH_ART_SUCC", payload: res.data }))
      .catch((error) =>
        dispatch({ type: "FETCH_ART_FAIL", payload: error.message })
      );
  };
};

export const addArt = (art) => {
  return (dispatch) => {
    dispatch({ type: "ADD_ART_START" });
    axiosWithAuth()
      .post("/art", art)
      .then((res) => dispatch({ type: "ADD_ART_SUCC", payload: res.data }))
      .catch((error) =>
        dispatch({ type: "ADD_ART_FAIL", payload: error.message })
      );
  };
};

export const filterArt = (type) => {
  return (dispatch) => {
    dispatch({ type: "FILTER_START" });
    axiosWithAuth()
      .get(`/art/${type}`)
      .then((res) => dispatch({ type: "FILTER_SUCC", payload: res.data }))
      .catch((error) =>
        dispatch({ type: "FILTER_FAIL", payload: error.message })
      );
  };
};

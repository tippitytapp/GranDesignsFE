import { axiosWithAuth } from "../../utils/axiosWithAuth"

export const logUserIn = (user) => {
    return (dispatch) => {
      console.log(user)
      dispatch({ type: "LOGIN_START_A" })
      axiosWithAuth()
        .post("/adminlogin", user)
          .then((res) => {
              localStorage.setItem("adminToken", res.data.token)
          dispatch({ type: "LOGIN_SUCC_A", payload: res.data.token });
        })
          .catch((error) => { console.log(error); dispatch({ type: "LOGIN_FAIL_A", payload: error.message }) });
  };
};

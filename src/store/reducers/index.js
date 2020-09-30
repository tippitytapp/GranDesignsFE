import { combineReducers } from "redux";
import { usersReducer as ur } from "./usersReducer";
import { adminReducer as ar } from "./adminReducer";

export default combineReducers({
    ur, ar
})
import { combineReducers } from "redux";
import { usersReducer as ur } from "./usersReducer";
import { adminReducer as ar } from "./adminReducer";
import { artReducer as art } from "./artReducer";

export default combineReducers({
    ur, ar, art
})
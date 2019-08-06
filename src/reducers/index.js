import {combineReducers} from "redux";
import {routerReducer} from "react-router-redux";
import resultPage from "./resultPage";

export default combineReducers({
    routing: routerReducer,
    resultPage
})
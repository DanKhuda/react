import {combineReducers} from "redux";
import {routerReducer} from "react-router-redux";
import resultPage from "./resultPage";
import imagePage from "./imagePage";

export default combineReducers({
    routing: routerReducer,
    resultPage,
    imagePage
})
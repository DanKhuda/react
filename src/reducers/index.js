import {combineReducers} from "redux";
import {routerReducer} from "react-router-redux";
import resultPage from "./resultPage";
import imagePage from "./imagePage";
import collectionPage from "./collectionPage";

export default combineReducers({
    routing: routerReducer,
    resultPage,
    imagePage,
    collectionPage
})
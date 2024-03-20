import { combineReducers } from "redux";
import counterReducer from "./counterReducers";
import productReducer from "./products.reducer";

const rootReducer = combineReducers({
    counterReducer,productReducer
})
export default rootReducer;
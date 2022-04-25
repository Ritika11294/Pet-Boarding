import { combineReducers, createStore } from "redux";


import { dataReducer } from "../Redux/reducer";
import {reducer} from  "./Login/reducer"

const rootReducer = combineReducers({
    data : dataReducer,
    reducer: reducer
})
export const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
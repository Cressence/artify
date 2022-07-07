import { combineReducers } from 'redux';

//Import reducers
import ProductInfo from "./reducer";

const rootReducer = combineReducers({
	ProductInfo,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>
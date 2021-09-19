import {applyMiddleware, createStore} from "redux";
import {Reducer} from "../Reducer/Reducer";
import thunkMiddleware from "redux-thunk"

const enhancer = applyMiddleware(thunkMiddleware);

const Store = createStore(Reducer,enhancer);

export default Store;
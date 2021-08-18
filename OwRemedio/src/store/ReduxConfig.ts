import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

import Reducers from "./Reducers";

const preloadState = {};

const StoreConfig = () => {
    const thunkMiddleware = applyMiddleware(thunk);
    const store = createStore(Reducers, preloadState, compose(
        thunkMiddleware,
    ));

    return store;
};

export default StoreConfig;

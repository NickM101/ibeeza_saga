import { applyMiddleware, createStore } from "redux";
import createSagaMiddleware from "@redux-saga/core";

import userReducer from "./userReducer";
import rootSaga from "./sagas";

const sagaMiddleware = createSagaMiddleware();

const middleware = [sagaMiddleware]

const store = createStore(userReducer,{}, applyMiddleware(...middleware));

sagaMiddleware.run(rootSaga)

export default store;




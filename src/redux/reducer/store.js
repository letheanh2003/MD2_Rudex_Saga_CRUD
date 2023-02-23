import { applyMiddleware, createStore } from "redux";
import createReduxMiddleware from 'redux-saga'
import { rootSaga } from "../../saga";
// import { rootReducer } from "./reducers";
import {rootReducer} from '../reducer/index.js'
// tạo đối tượng redux-saga của ứng dụng
const sagaMiddleware = createReduxMiddleware();
// tạo đối tượng redux-saga của ứng dụng
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
// chạy rootSaga để lọc các action
sagaMiddleware.run(rootSaga);
export default store;
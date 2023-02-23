import { all, takeLatest } from "redux-saga/effects";
import * as actionTypes from "../redux/constanst/actionTypes";
import * as userSaga from "./userSaga";
export const rootSaga = function* () {
    yield all([
        // takeLatest (actionType,function-Saga)
        takeLatest(actionTypes.USER_GET, userSaga.USER_SAGA_GET),
        takeLatest(actionTypes.USER_POST, userSaga.USER_SAGA_POST),
        takeLatest(actionTypes.USER_PATCH, userSaga.USER_SAGA_PATCH),
        takeLatest(actionTypes.USER_DELETE, userSaga.USER_SAGA_DELETE),
        takeLatest(actionTypes.USER_SEARCH, userSaga.USER_SAGA_GET),
    ])
}
import * as userService from "../api/userService";
import { call, put } from 'redux-saga/effects'
import { act_user_success } from "../redux/reducer/actions";
import * as actionTypes from "../redux/constanst/actionTypes";
// các saga kết nối và làm việc với UserSevice
export const USER_SAGA_GET = function* (action) {
    console.log(action);
    try {
        let listUser;
        switch (action.type) {
            case actionTypes.USER_SEARCH:
                listUser = yield call(userService.USER_SEARCH_SERVICE, action.payload);
                break;
                default:
                listUser = yield call(userService.USER_GET_SERVICE);
                // call(functionName ,argument of function)
        }
        // success --> gọi action --> put(action)
        yield put(act_user_success(actionTypes.USER_SUCCESS, listUser));
    } catch (error) {
        console.log("error==>", error);
    }
}
export const USER_SAGA_POST = function* (action) {
    try {
        // gọi sang service để thêm mới 1 user
        yield call(userService.USER_POST_SERVICE, action.payload);
        // thêm mới thành công ==> USER_SAGA_GET
        yield USER_SAGA_GET();
    } catch (error) {
        console.log("erro==>", error);
    }
}
export const USER_SAGA_PATCH = function* (action) {
    try {
        yield call(userService.USER_PATCH_SERVICE, action.payload);
        // cap nhat thanh cong
        yield USER_SAGA_GET();
    } catch (error) {
        console.log("error==>", error);
    }
}
export const USER_SAGA_DELETE = function* (action) {
    try {
        yield call(userService.USER_DELETE_SERVICE, action.payload);
        // xoa thanh cong
        yield USER_SAGA_GET();
    } catch (error) {
        console.log("error==>", error);
    }
}
export const USER_SAGA_SEARCH = function* (action) {
    try {
        yield call(userService.USER_SEARCH_SERVICE, action.payload);
        // tìm kiếm thành công 
        yield USER_SAGA_GET();
    } catch (error) {
        console.log("error---->", error);
    }
}

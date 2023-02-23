import { USER_SUCCESS } from "../constanst/actionTypes";

const initialState = [];
export const users = (state = initialState, action) => {
    switch (action.type) {
        case USER_SUCCESS:
            // xử lí cho trường hợp goi api thành công
            // data cần lưu trữ ở store của redux: action.payload
            return [...action.payload];
        default:
            return state;
    }
}
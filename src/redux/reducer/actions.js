import * as actionTypes from "../constanst/actionTypes";
// tạo action để yêu cầu lấy các dữ liệu từ JSON - server
// fuction = (data)=>{return object(type,payload)}
export const act_get_user = () => {
    console.log("vào từ ListUSer com ");
    return {
        type: actionTypes.USER_GET
    }
}
export const act_user_success = (actionType, data) => {
    return {
        type: actionType,
        payload: data
    }
}
export const act_create_user = (newUser) => {
    return {
        type: actionTypes.USER_POST,
        payload: newUser
    }
}
export const act_update_user = (updateUsers) => {
    return {
        type: actionTypes.USER_PATCH,
        payload: updateUsers
    }
}
export const act_delete_user = (id) => {
    return {
        type: actionTypes.USER_DELETE,
        payload: id
    }
}
export const act_search_user = (searchData) => {
    return { 
        type: actionTypes.USER_SEARCH,
        payload: searchData
    }
}
import { intances } from "./axios"
// xây dựng các service để xây dựng các api-xuwrlis bất đông bộ
export const USER_GET_SERVICE = async () => {
    // gọi và đợi kết quả trả về --> http://localhost:8000/users
    let response = await intances.get("users");
    // trả về danh sách user lấy được từ api
    return response.data;
}
export const USER_POST_SERVICE = async (newUser) => {
    await intances.post("users", newUser);
}
export const USER_PATCH_SERVICE = async (updatateUsers) => {
    await intances.patch("users/" + updatateUsers.id, updatateUsers);
}
export const USER_DELETE_SERVICE = async (id) => {
    await intances.delete("users/" + id);
}
export const USER_SEARCH_SERVICE = async (searchData) => {
    let response= await intances.get("users?fullname_like=" + searchData);
    return response.data;
}





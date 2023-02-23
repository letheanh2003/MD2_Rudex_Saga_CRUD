import axios from 'axios';
// khởi tạo một đối tượng axios từ đương đãn của api 
export const intances = axios.create({
    baseURL: "http://localhost:8000/"
})
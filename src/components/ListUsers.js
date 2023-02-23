import React, { useState } from 'react';
import { useEffect } from 'react';
import * as actions from '../redux/reducer/actions';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

export default function ListUsers() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [search, setSearch] = useState("");
    // gọi action act_get_user khi conponents dc mount
    // userEffect
    /*
        userEffect(callback):gọi khi mount và re-render
        userEffect(callback,[]):gọi khi mount
        userEffect(callback):gọi khi mount và deps thay đổi 

    */
    useEffect(() => {
        // thực hiện khi components dc mount
        dispatch(actions.act_get_user());
    }, []);
    const handleUpdate = (userUpdate) => {
        // luu du lieu vao localstorage
        localStorage.setItem("userUpdate", JSON.stringify(userUpdate));
        // chuyen sanh update user voi components
        navigate("/updateUsers")
    }
    const handelDelete = (id) => {
        dispatch(actions.act_delete_user(id));
    }
    //  thực hiện lấy state từ store
    const listUser = useSelector(state => state.users);
    let elementListUser = listUser.map((user, index) => {
        return <tr key={user.id}>
            <td>{index + 1}</td>
            <td>{user.id}</td>
            <td>{user.email}</td>
            <td>{user.password}</td>
            <td>{user.fullname}</td>
            <td>
                <button onClick={() => handleUpdate(user)}>UPDATE</button>
                <button onClick={() => handelDelete(user.id)}>DELETE</button>
            </td>
        </tr>
    })
    return (
        <div>
            <h2>List Users</h2>
            <input id='search' name='search' onChange={(e)=>setSearch(e.target.value)}/>
            <button onClick={()=> dispatch(actions.act_search_user(search))}>Search</button>
            <table border={'1'}>
                <thead>
                    <tr>
                        <th>STT</th>
                        <th>Users Id</th>
                        <th>Email</th>  
                        <th>Password</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {elementListUser}
                </tbody>
            </table>
            <button onClick={() => navigate("/newUser")}>Create New User</button>
        </div>
    )
}

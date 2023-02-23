import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux';
import { act_create_user } from '../redux/reducer/actions';
import { useNavigate } from 'react-router-dom';

export default function NewUsers() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    // khai báo các state lưu trữ bên tron newUser
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [fullname, setFullname] = useState();
    const hanleCreate = () => {
        dispatch(act_create_user({ email, password, fullname }));
        navigate('/');
    }
    return (
        <div>
            <h2>Create New User</h2>
            <label htmlFor='email'>Email</label>
            <input id="email" name='email' onChange={(e) => setEmail(e.target.value)} /><br />
            <label htmlFor='password'>Password</label>
            <input id="password" name='password' onChange={(e) => setPassword(e.target.value)} /><br />
            <label htmlFor='fullname'>Full Name</label>
            <input id="fullname" name='fullname' onChange={(e) => setFullname(e.target.value)} /><br />
            <button onClick={hanleCreate}>Create</button>
        </div>
    )
}


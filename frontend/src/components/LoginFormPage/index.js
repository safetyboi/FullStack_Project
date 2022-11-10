import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as sessionActions from '../../store/session';
import { Redirect } from 'react-router-dom';
import './LoginForm.css';
import { NavLink } from "react-router-dom";




export const LoginFormPage = (props)=> {
    const dispatch = useDispatch();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState([]);
    const sessionUser = useSelector(state => state.session.user);

    const handleDemo = (e) => {
        e.preventDefault();
        // setUsername('demo-lition');
        // setPassword('password');
        const res = dispatch(sessionActions.loginUser({ username: 'Demo-lition', password: 'password' }));
        if (res?.errors) setErrors(res.errors);
    }

    if (sessionUser) return <Redirect to="/" />;

    const handleSubmit = (e)=> {
        e.preventDefault();
        const res = dispatch(sessionActions.loginUser({ username, password }));
        if (res?.errors) setErrors(res.errors);
        
    }

    return (
        <>
        <div className="flex-wrapper">
        <form className="login-form" onSubmit={handleSubmit}>
            <div className="form-title">Login</div>
             <ul>
                {errors.map(error => <li key={error}>{error}</li>)}
            </ul>
            <label className="input-label"> USERNAME
                <br/>
                <input type="text" value={username} placeholder="username" onChange={(e)=> setUsername(e.target.value)} className="input-field"/>
            </label>
            <br/>
            <label className="input-label"> PASSWORD
            <br/>
                <input type="password" value={password} placeholder="password" onChange={(e)=> setPassword(e.target.value)} className="input-field"/>
            </label>
            <br/>
            <div className="login-signup-container">
            <button className="login-signup-button" onClick={handleDemo}>Demo-User</button>
            <input type="submit" value="Login" className="login-signup-button"/>
            <NavLink to="/signup" className="login-signup-button" style={{ textDecoration: 'none' }}>Sign Up</NavLink>
            </div>
        </form>
        </div>
        </>
    );
}


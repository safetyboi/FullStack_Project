import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as sessionActions from '../../store/session';
import { Redirect } from 'react-router-dom';
import './SignupForm.css';

export const SignupFormPage = ()=> {
    const dispatch = useDispatch();
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [errors, setErrors] = useState([]);
    const sessionUser = useSelector(state => state.session.user);
    

    if (sessionUser) return <Redirect to="/" />;

    const handleSubmit = (e)=> {
        e.preventDefault();

        if (password === confirmPassword) {
            
            
            const res = dispatch(sessionActions.signupUser({ username, email, password }));
            if (res?.errors) setErrors(res.errors);
            return res;
        } else {
            return setErrors['Confirm Password field must be the same as the Password field']
        }
    }

    return (
        <>
        <div className="flex-wrapper">
        <form className="signup-form" onSubmit={handleSubmit}>
             <ul>
                {errors.map(error => <li key={error}>{error}</li>)}
            </ul>
            <label className="input-label"> Username
                <input type="text" value={username} onChange={(e)=> setUsername(e.target.value)} className="input-field"/>
            </label>

            <label className="input-label"> Email
                <input type="text" value={email} onChange={(e)=> setEmail(e.target.value)} className="input-field"/>
            </label>

            <label className="input-label"> Password
                <input type="password" value={password} onChange={(e)=> setPassword(e.target.value)} className="input-field"/>
            </label>

            <label className="input-label"> Confirm Password
                <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} className="input-field"/>
            </label>
            <div className="signup-container">
            <input type="submit" value="Sign up!" className="signup-button" />
            </div>
        </form>
        </div>
        </>
    );
}

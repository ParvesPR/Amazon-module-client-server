import React, { useState } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import './Login.css';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const navigate = useNavigate();
    const location = useLocation();
    const from = location?.state?.from?.pathname || '/';

    const handleEmail = event => {
        setEmail(event.target.value);
    }

    const handlePassword = event => {
        setPassword(event.target.value);
    };
    if (user) {
        navigate(from, { replace: true });
    }
    const handleLogin = event => {
        event.preventDefault();
        signInWithEmailAndPassword(email, password);
    }



    return (
        <div className='form-container'>
            <div>
                <h2 className='form-title'>Login</h2>
                <form onSubmit={handleLogin}>
                    <div className='input-group'>
                        <label htmlFor="email">Email</label>
                        <input onBlur={handleEmail} type="email" name="email" required />
                    </div>
                    <div className='input-group'>
                        <label htmlFor="password">Password</label>
                        <input onBlur={handlePassword} type="password" name="password" required />
                    </div>
                    <p>{error?.message}</p>
                    {loading && <p>Loading...</p>}
                    <input className='form-btn' type="submit" value="Login" />
                </form>
                <p>New to Amazon? <Link className='create-ac-link' to='/signup'>Create an account</Link></p>
                <div className='or-div'>
                    <div className='div-1'><hr /></div>
                    <span> or </span>
                    <div className='div-2'><hr /></div>
                </div>
                <div className='continue-google'>
                    Continue with Google
                </div>
            </div>
        </div>
    );
};

export default Login;
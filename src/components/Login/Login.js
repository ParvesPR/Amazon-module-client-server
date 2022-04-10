import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

const Login = () => {
    return (
        <div className='form-container'>
            <div>
                <h2 className='form-title'>Login</h2>
                <form>
                    <div className='input-group'>
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" />
                    </div>
                    <div className='input-group'>
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" />
                    </div>
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
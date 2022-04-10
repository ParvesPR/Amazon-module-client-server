import React from 'react';
import { Link } from 'react-router-dom';
import './SignUp.css';

const SignUp = () => {
    return (
        <div className='form-container'>
            <div>
                <h2 className='form-title'>Sign Up</h2>
                <form>
                    <div className='input-group'>
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" required/>
                    </div>
                    <div className='input-group'>
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" required/>
                    </div>
                    <div className='input-group'>
                        <label htmlFor="confirm-password">Confirm Password</label>
                        <input type="password" name="confirm-password" required/>
                    </div>
                    <input className='form-btn' type="submit" value="Sign Up" />
                </form>
                <p>Already have an account? <Link className='create-ac-link' to='/login'>Login</Link></p>
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

export default SignUp;
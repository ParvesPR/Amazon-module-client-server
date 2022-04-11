import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Shipment = () => {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [phone, setPhone] = useState('');
    const [error, setError] = useState('');

    const handleName = event => {
        setName(event.target.value);
    }
    const handleEmail = event => {
        setEmail(event.target.value);
    }

    const handleAddress = event => {
        setAddress(event.target.value);
    }
    const handlePhone = event => {
        setPhone(event.target.value);
    }

    return (
        <div className='form-container'>
            <div>
                <h2 className='form-title'>Shipping Info</h2>
                <form>
                    <div className='input-group'>
                        <label htmlFor="name">Name</label>
                        <input onBlur={handleName} type="text" name="name" required />
                    </div>
                    <div className='input-group'>
                        <label htmlFor="email">Email</label>
                        <input onBlur={handleEmail} type="email" name="email" required />
                    </div>
                    <div className='input-group'>
                        <label htmlFor="address">Address</label>
                        <input onBlur={handleAddress} type="text" name="address" required />
                    </div>
                    <div className='input-group'>
                        <label htmlFor="phone">Phone</label>
                        <input onBlur={handlePhone} type="number" name="phone" required />
                    </div>

                    <input className='form-btn' type="submit" value="Add Shipping" />
                </form>
            </div>
        </div>
    );
};

export default Shipment;
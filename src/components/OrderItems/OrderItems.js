import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './OrderItems.css'

const OrderItems = ({ product, handleRemoveCart }) => {
    const { name, price, shipping, quantity, img } = product
    return (
        <div className='order-items'>
            <div>
                <img src={img} alt="" />
            </div>
            <div className='order-details-container'>
                <div className="order-details">
                    <p>{name}</p>
                    <p>Price: {price}</p>
                    <p>Quantity: {quantity}</p>
                    <p>Shipping: {shipping}</p>
                </div>
                <div className="order-button">
                    <button onClick={() => handleRemoveCart(product)} className='delete'>
                        <FontAwesomeIcon className='delete-icon' icon={faTrashAlt}></FontAwesomeIcon>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default OrderItems;
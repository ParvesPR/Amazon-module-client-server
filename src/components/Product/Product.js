import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Product = ({ product, addToCart }) => {
    const { img, name, seller, price, ratings } = product
    return (
        <div className='products'>
            <img src={img} alt="" />
            <div className='product-info'>
                <p className='product-name'>{name}</p>
                <p>Price: {price}</p>
                <p>Manufacture: {seller}</p>
                <p>Ratings: {ratings} stars</p>
            </div>
            <button onClick={() => addToCart(product)} className='product-btn'>
                <p className='btn-text'>Add to Cart</p>
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button>


        </div>
    );
};

export default Product;
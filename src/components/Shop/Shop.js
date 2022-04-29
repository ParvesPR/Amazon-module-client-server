import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useProducts from '../../hooks/useProducts';
import { addToDb, getStored } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
    const [products, setProducts] = useProducts();
    const [cart, setCart] = useState([]);

    useEffect(() => {
        const newStored = getStored();
        const saveCart = [];
        for (const id in newStored) {
            const addedProduct = products.find(product => product.id === id);
            if (addedProduct) {
                const quantity = newStored[id];
                addedProduct.quantity = quantity;
                saveCart.push(addedProduct);
            }
        }
        setCart(saveCart);
    }, [products]);

    const addToCart = (selectedProduct) => {
        let newCart = []
        const exists = cart.find(product => product.id === selectedProduct.id);
        if (!exists) {
            selectedProduct.quantity = 1;
            newCart = [...cart, selectedProduct];
        }
        else {
            const rest = cart.filter(product => product.id !== selectedProduct.id);
            exists.quantity = exists.quantity + 1;
            newCart = [...rest, exists];
        }
        setCart(newCart);
        addToDb(selectedProduct.id);
    }
    return (
        <div className='shop-container'>
            <div className="product-container">
                {
                    products.map(product =>
                        <Product
                            key={product._id} product={product}
                            addToCart={addToCart}
                        >
                        </Product>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}>
                <Link to="/orders">
                    <button>Review Order</button>
                </Link>
                </Cart>
            </div>
        </div>
    );
};

export default Shop;
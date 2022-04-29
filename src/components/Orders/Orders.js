import React from 'react';
import { Link } from 'react-router-dom';
import useCart from '../../hooks/useCart';
import useProducts from '../../hooks/useProducts';
import { removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import OrderItems from '../OrderItems/OrderItems';

const Orders = () => {
    const [products] = useProducts();
    const [cart, setCart] = useCart(products);

    const handleRemoveCart = product => {
        const rest = cart.filter(cartProduct => cartProduct._id !== product._id)
        setCart(rest);
        removeFromDb(product._id)
    };
    return (
        <div className='shop-container'>
            <div className="orderItems-container">
                {
                    cart.map(product => <OrderItems
                        key={product._id}
                        product={product}
                        handleRemoveCart={handleRemoveCart}
                    ></OrderItems>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}>
                    <Link to="/shipment">
                        <button>Proceed Checkout</button>
                    </Link>
                </Cart>
            </div>
        </div>
    );
};

export default Orders;
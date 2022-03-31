import { useEffect, useState } from "react";
import { getStored } from "../utilities/fakedb";

const useCart = (products) => {
    const [cart, setCart] = useState([]);

    useEffect(() => {
        const newStored = getStored();
        const saveCart = [];
        for (const id in newStored) {
            const addedProduct = products.find(product => product.id === id);
            if (addedProduct) {
                const quantity = newStored[id];
                addedProduct.quantity = quantity;
                saveCart.push(addedProduct)
            }
        }
        setCart(saveCart);
    }, [products]);
    return [cart, setCart];
};
export default useCart;
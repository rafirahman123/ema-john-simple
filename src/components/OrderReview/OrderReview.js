import React from 'react';
import useProducts from '../../Hooks/useProducts';
import useCart from './useCart';

const OrderReview = () => {
    const [products, setproducts] = useProducts();
    const [cart] = useCart(products);
    return (
        <div>
            <h1>{products.length}</h1>
            <h2>{cart.length}</h2>
            <h2>This is order reivew</h2>
        </div>
    );
};

export default OrderReview;
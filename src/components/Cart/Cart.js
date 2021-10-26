import React from 'react';
import './Cart.css';
const Cart = (props) => {
    const { cart } = props;
    // console.log(cart);
    let totalQuantity = 0;
    let total = 0;
    for (const product of cart) {
        if (!product.quantity) {
            product.quantity = 1;
        }
        total = total + product.price * product.quantity;
        totalQuantity = totalQuantity + product.quantity;
    }
    const shipping = 15;
    const tax = (shipping + total) / 10;
    const grandTotal = total + shipping + tax;

    return (
        <div className="cart-items">
            <h2>Order summary</h2>
            <h5>Items ordered:{totalQuantity}</h5>

            <h5>Total:{total.toFixed(2)}</h5>
            <h5>Shipping:{shipping}</h5>
            <h5>Tax:{tax.toFixed(2)}</h5>
            <h3 className="grand-total">Grand Total:{grandTotal.toFixed(2)}</h3>
            {/* <button className="review-button">Review your order</button> */}
            {props.children}

        </div>
    );
};

export default Cart;
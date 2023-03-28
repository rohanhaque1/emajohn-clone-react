import React from 'react';

const Cart = (props) => {
    const { cart } = props;

    let totalPrice = 0;
    for (const product of cart) {
        totalPrice += product.price
    }

    return (
      <div>
        <h2>Order summery</h2>
        <p>Selected Items: {cart.length}</p>
        <p>Total price: ${totalPrice}</p>
        <p>Total Shiopping: </p>
        <p>Tax: </p>
        <h3>Grand Total: </h3>
      </div>
    );
};

export default Cart;

import React, { useState, useEffect } from "react";
import classes from "./Cart.module.css";

const Cart = ({ products, onCancel, onOrder }) => {
    const [totalPrice, setTotalPrice] = useState(0);

    useEffect(() => {
        if (!products) {
            return;
        }
        // Calculate total price whenever products or their quantities change
        let totalPrice = 0;
        for (let cartItem of products) {
            const { product, size, quantity } = cartItem;
            let price = 0;
            switch (size) {
                case "L":
                    price = product.sizes.L * product.price;
                    break;
                case "M":
                    price = product.sizes.M * product.price;
                    break;
                case "S":
                    price = product.sizes.S * product.price;
                    break;
                default:
                    break;
            }
            totalPrice += price * quantity;
        }
        setTotalPrice(totalPrice);
    }, [products]);

    const handleCancelClick = () => {
        onCancel();
    };

    const handleOrderClick = () => {
        onOrder();
    };

    return (
        <div className={classes.cart}>
          <h2>Cart</h2>
          {products && products.length > 0 ? (
            <>
              <ul>
                {products.map((cartItem, index) => (
                  <li key={index}>
                    {cartItem.product.name} ({cartItem.size}, {cartItem.quantity}x) - $
                    {cartItem.product.price * cartItem.product.sizes[cartItem.size]}
                  </li>
                ))}
              </ul>
              <p>Total: ${totalPrice.toFixed(2)}</p>
              <button onClick={handleCancelClick}>Cancel</button>
              <button onClick={handleOrderClick}>Order</button>
            </>
          ) : (
            <p>No items in cart</p>
          )}
        </div>
      );
};

export default Cart;

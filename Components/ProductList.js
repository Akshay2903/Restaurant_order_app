import React from 'react';
import classes from "./ProductList.module.css";


const ProductList = ({ products, onAddToCart }) => {
    return (
      <div className={classes.prodcutlist}>
        <h2>Product List</h2>
        {products.map((product, index) => (
          <div key={index} className={classes.productitem}>
            <p>Name: {product.name}</p>
            <p>Description: {product.description}</p>
            <p>Price: {product.price}</p>
            <button onClick={() => onAddToCart(product, "L")}>L: {product.sizes.L}</button>
            <button onClick={() => onAddToCart(product, "M")}>M: {product.sizes.M}</button>
            <button onClick={() => onAddToCart(product, "S")}>S: {product.sizes.S}</button>
          </div>
        ))}
      </div>
    );
  }

export default ProductList;

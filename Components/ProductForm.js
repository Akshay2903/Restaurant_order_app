import React, { useState } from "react";
import classes from "./ProductForm.module.css"

const ProductForm = ({ onAddProduct }) =>  {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [sizeL, setSizeL] = useState(0);
    const [sizeM, setSizeM] = useState(0);
    const [sizeS, setSizeS] = useState(0);
  
    const handleSubmit = (event) => {
      event.preventDefault();
      const product = { name, description, price, sizes: { L: sizeL, M: sizeM, S: sizeS } };
      onAddProduct(product);
      setName('');
      setDescription('');
      setPrice('');
      setSizeL(0);
      setSizeM(0);
      setSizeS(0);
    };
  
    return (
      <form onSubmit={handleSubmit} className={classes.productform}>
        <label>
          Name:
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </label>
        <label>
          Description:
          <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
        </label>
        <label>
          Price:
          <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} />
        </label>
        <label>
          L:
          <input type="number" value={sizeL} onChange={(e) => setSizeL(e.target.value)} />
        </label>
        <label>
          M:
          <input type="number" value={sizeM} onChange={(e) => setSizeM(e.target.value)} />
        </label>
        <label>
          S:
          <input type="number" value={sizeS} onChange={(e) => setSizeS(e.target.value)} />
        </label>
        <button type="submit">Add</button>
      </form>
    );
  }

export default ProductForm;

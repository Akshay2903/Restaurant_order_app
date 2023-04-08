import React, { useState } from "react";
import ProductForm from "./Components/ProductForm";
import ProductList from "./Components/ProductList";
import Cart from "./Components/Cart"

function App() {
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);
 


  const handleAddProduct = (product) => {
    setProducts([...products, product]);
  };

  const handleAddToCart = (product, size) => {
    if (!["L", "M", "S"].includes(size)) {
      // Size is invalid, do not add item to cart
      return;
    }
  
    const cartItem = cartItems.find(
      (item) => item.product.id === product.id && item.size === size
    );
    if (cartItem) {
      const updatedCartItems = cartItems.map((item) =>
        item.product.id === product.id && item.size === size
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
      setCartItems(updatedCartItems);
    } else {
      setCartItems([...cartItems, { product: product, size: size, quantity: 1 }]);
    }
  };
  
  

  const handleCancelOrder = () => {
    setCartItems([]);
  };

  const handlePlaceOrder = () => {
    // Implement your order placement logic here
    alert("Order placed successfully!");
    setCartItems([]);
  };

  return (
    <div>
      <h1>Shopping App</h1>
      <ProductForm onAddProduct={handleAddProduct} />
      <ProductList products={products} onAddToCart={handleAddToCart} />
      <Cart
        cartItems={cartItems}
        onCancelOrder={handleCancelOrder}
        onPlaceOrder={handlePlaceOrder}
      />
    </div>
  );
}

export default App;

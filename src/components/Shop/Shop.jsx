import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';

const Shop = () => {
    const [products, setProducts] = useState([])
    const [cart, setCart] = useState([])

    useEffect(() => {
        fetch('products.json').then(res => res.json()).then(data => setProducts(data))
    }, [])

    const addToCart = (product) => {
        const newCart = [...cart, product]
        setCart(newCart)
    };
    
    return (
      <>
        <div className="shop-container grid grid-cols-12">
          <div className="product-container col-span-9 p-10 grid grid-cols-3 gap-4">
            {products.map((product) => (
              <Product key={product.id} product={product} addToCart={addToCart}></Product>
            ))}
          </div>

          <div className="cart-container col-span-3 bg-orange-300">
                    <h2>Order summery</h2>
                    <p>Selected Items: {cart.length}</p>
          </div>
        </div>
      </>
    );
};

export default Shop;
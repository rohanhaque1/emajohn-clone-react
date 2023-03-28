import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
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

          <div className="cart-container col-span-3 bg-orange-300 p-10">
            <Cart
              cart={cart}
            ></Cart>
          </div>
        </div>
      </>
    );
};

export default Shop;
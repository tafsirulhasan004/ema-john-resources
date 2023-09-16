import React, { useEffect, useState } from 'react';
import './Shop.css';
import Product from '../Product/Product';
const Shop = () => {
      
      const [Item, Setitem] = useState([]);
      const [cart, Setcart] = useState([]);

      useEffect(() => {
            fetch('products.json')
            .then(res => res.json())
            .then(data => Setitem(data))
      }, [])

      const AdtoHandleCart = (product) => {
         const NewCart = [...cart, product];
         Setcart(NewCart);
    }


    return (
        <div className='Shop-Container'>
            <div className='Product-Container'>
               {
                Item.map(product => <Product 
                    key={product.id}
                    product={product}
                    AdtoHandleCart={AdtoHandleCart}
                ></Product>)
               }
            </div>
            <div className='Order-Samary'>
                <h3>Order Samary</h3>
                <span>Selected Item: {cart.length}</span>
            </div>
        </div>
    );
};

export default Shop;
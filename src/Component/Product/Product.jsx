import React from 'react';
import './Product.css';

const Product = (props) => {
    const {img, name, price, ratings, seller,} = props.product;
    
       const AdtoHandleCart = props.AdtoHandleCart;

    return (
        <div className='Products'>
            <img src={img} alt="Image Not Showing"/>
            <h5 className='product-name'>{name}</h5>
            <span className='price'>Price: ${price}</span>
                    <div>
                 <span className='rating'>Rating: {ratings}</span>
                 <span className='seller'>Manufacture: {seller}</span> 
                    </div>


            <button onClick={() => AdtoHandleCart(props.product)} className='Cart-Button'>Add to Cart</button>  


        </div>
    );
};

export default Product;
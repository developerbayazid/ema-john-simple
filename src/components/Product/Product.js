import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Product.css';

const Product = (props) => {
    const {name, img, seller, price, stock} = props.product;
    return (
        <div className="product">
            <div className="product-img product-left">
                <img src={img} alt="" />
            </div>
            <div className="product-right">
                <h4 className="product-name">{name}</h4>
                <p>by: {seller}</p>
                <br />
                <p>${price}</p>
                <p>only {stock} left in stock - order soon</p>
                <button className="cart" onClick={() => props.productCartHandler(props.product)}>
                    <FontAwesomeIcon icon={faShoppingCart} /> add to cart
                </button>
            </div>
        </div>
    );
};

export default Product;
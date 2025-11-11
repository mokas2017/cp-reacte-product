/**
 * Price Component
 * Displays the product price formatted with currency symbol
 * Price is formatted to 2 decimal places for consistency
 */
import React from 'react';
import product from '../product';

const Price = () => {
    return (
        <p className="product-price" aria-label="Product price">
            ${product.price.toFixed(2)}
        </p>
    );
};

export default Price;
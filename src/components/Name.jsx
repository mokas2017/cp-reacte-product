/**
 * Name Component
 * Displays the product name from the product data
 * Uses semantic HTML and ARIA labels for accessibility
 */
import React from 'react';
import product from '../product';

const Name = () => {
    return (
        <h2 className="product-name" aria-label="Product name">
            {product.name}
        </h2>
    );
};

export default Name;
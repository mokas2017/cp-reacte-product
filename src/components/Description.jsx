/**
 * Description Component
 * Displays the detailed product description
 * Provides comprehensive information about the product features
 */
import React from 'react';
import product from '../product';

const Description = () => {
    return (
        <p className="product-description" aria-label="Product description">
            {product.description}
        </p>
    );
};

export default Description;
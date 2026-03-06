import React from 'react';
import './ProductCard.css'; // Assume you have some styles for the card

interface ProductCardProps {
    image: string;
    title: string;
    price: number;
    onAddToCart: () => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ image, title, price, onAddToCart }) => {
    return (
        <div className="product-card">
            <img src={image} alt={title} className="product-image" />
            <h2 className="product-title">{title}</h2>
            <p className="product-price">${price.toFixed(2)}</p>
            <button onClick={onAddToCart} className="add-to-cart-button">Add to Cart</button>
        </div>
    );
};

export default ProductCard;
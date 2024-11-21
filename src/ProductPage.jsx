import React, { useState } from 'react';
import { useCart } from './CartContext';

const ProductPage = ({ product, onClose, onShowNotification }) => {
    const [quantity, setQuantity] = useState(1);
    const { addToCart, buyNow } = useCart();

    if (!product) {
        return <div>Produto não encontrado.</div>;
    }

    const handleQuantityChange = (change) => {
        setQuantity(prev => Math.max(1, prev + change));
    };

    const handleAddToCart = () => {
        addToCart(product, quantity);
        onShowNotification("Produto Adicionado", [product.title, product.description], "#ff9710");
    };

    const handleBuyNow = () => {
        buyNow(product, quantity);
    };

    return (
        <>
            <button className="close-button" onClick={onClose}>←Voltar</button>
            <div className="product-page">
                <div className="product-image">
                    <img src={product.image} alt={product.title} />
                </div>
                <div className="product-info">
                    <h1>{product.title}</h1>
                    <p className="description">{product.description}</p>
                    <h2>{new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(product.price)}</h2>
                    
                    <div className="quantity-selector">
                        <button onClick={() => handleQuantityChange(-1)}>-</button>
                        <span>{quantity}</span>
                        <button onClick={() => handleQuantityChange(1)}>+</button>
                    </div>

                    <div className="action-buttons">
                        <button className="buy-now" onClick={handleBuyNow}>Comprar Agora</button>
                        <button className="add-to-cart" onClick={handleAddToCart}>
                            Adicionar ao Carrinho
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProductPage;
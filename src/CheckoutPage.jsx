import React from 'react';
import { useCart } from './CartContext';

function CheckoutPage() {
    const { cartItems, closeCheckout, onShowNotification } = useCart();

    const total = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

    function handleCheckout() {
        onShowNotification("Compra finalizada", ["Compra realizada com sucesso!"], "#00c851");
    }

    const handleClose = () => {
        closeCheckout();
    };

    return (
        <div className="checkout-page">
            <button className="close-button" onClick={handleClose}>←Voltar</button>
            
            <div className="checkout-container">
                <h1>Finalizar Compra</h1>
                
                <div className="checkout-items">
                    {cartItems.map((item) => (
                        <div key={item.id} className="checkout-item">
                            <img src={item.image} alt={item.title} />
                            <div className="item-details">
                                <h3>{item.title}</h3>
                                <p>Quantidade: {item.quantity}</p>
                                <p>Preço unitário: {new Intl.NumberFormat('pt-BR', { 
                                    style: 'currency', 
                                    currency: 'BRL' 
                                }).format(item.price)}</p>
                                <p>Subtotal: {new Intl.NumberFormat('pt-BR', { 
                                    style: 'currency', 
                                    currency: 'BRL' 
                                }).format(item.price * item.quantity)}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="checkout-summary">
                    <h2>Resumo do Pedido</h2>
                    <p>Total de itens: {totalItems}</p>
                    <p>Frete: Grátis</p>
                    <h3>Total: {new Intl.NumberFormat('pt-BR', { 
                        style: 'currency', 
                        currency: 'BRL' 
                    }).format(total)}</h3>
                    <button onClick={handleCheckout} className="checkout-button">Finalizar Pedido</button>
                </div>
            </div>
        </div>
    );
}

export default CheckoutPage;
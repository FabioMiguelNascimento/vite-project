import React from 'react';
import { useCart } from './CartContext';
import CheckoutPage from './CheckoutPage';

function Shopping() {
  const { cartItems, isCartOpen, isCheckoutOpen, updateQuantity, getTotal, setIsCheckoutOpen } = useCart();

  if (isCheckoutOpen) {
    return <CheckoutPage />;
  }

  return (
    <div className={`shopping ${isCartOpen ? 'open' : ''}`}>
      <div className="cart-items">
        {cartItems.map(item => (
          <div key={item.id} className="cart-item">
            <img src={item.image} alt={item.title} />
            <div className="item-info">
              <h4>{item.title}</h4>
              <p className="price">
                {new Intl.NumberFormat('pt-BR', {
                  style: 'currency',
                  currency: 'BRL'
                }).format(item.price)}
              </p>
            </div>
            <div className="quantity-controls">
              <button onClick={() => updateQuantity(item.id, -1)}>-</button>
              <span>{item.quantity}</span>
              <button onClick={() => updateQuantity(item.id, 1)}>+</button>
            </div>
          </div>
        ))}
      </div>
      <div className="cart-summary">
        <div className="total">
          Total: {new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
          }).format(getTotal())}
        </div>
        <button 
          className="checkout-btn"
          onClick={() => setIsCheckoutOpen(true)}
          disabled={cartItems.length === 0}
        >
          Finalizar Compra
        </button>
      </div>
    </div>
  );
}

export default Shopping;
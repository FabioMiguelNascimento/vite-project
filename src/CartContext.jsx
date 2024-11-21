import { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export function CartProvider({ children, onShowNotification }) {
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);

  const addToCart = (product, quantity) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item.id === product.id);
      if (existingItem) {
        return prevItems.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prevItems, { ...product, quantity }];
    });
  };

  const updateQuantity = (productId, change) => {
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === productId
          ? { ...item, quantity: Math.max(0, item.quantity + change) }
          : item
      ).filter(item => item.quantity > 0)
    );
  };

  const toggleCart = () => setIsCartOpen(prev => !prev);

  const getTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const buyNow = (product, quantity) => {
    setCartItems([{ ...product, quantity }]);
    setIsCheckoutOpen(true);
  };

  const closeCheckout = () => {
    setIsCheckoutOpen(false);
    setIsCartOpen(false);
  };

  return (
    <CartContext.Provider value={{
      cartItems,
      setCartItems,
      isCartOpen,
      isCheckoutOpen,
      setIsCheckoutOpen,
      addToCart,
      updateQuantity,
      toggleCart,
      getTotal,
      buyNow,
      closeCheckout,
      onShowNotification
    }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}
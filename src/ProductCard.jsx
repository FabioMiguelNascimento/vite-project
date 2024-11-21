import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useCart } from "./CartContext";

function ProductCard({ product, onProductClick, onShowNotification }) {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(product, 1);
    onShowNotification("Produto Adicionado", [product.title, product.description], "#ff9710");
  };

  return (
    <div className="product-card">
      <img src={product.image} alt={product.title} onClick={() => onProductClick(product)} />
      <div className="content">
        <h3 onClick={() => onProductClick(product)}>{product.title}</h3>
        <p className="description">{product.description}</p>
        <p className="price">
          {new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
          }).format(product.price)}
        </p>
        <FontAwesomeIcon className="add-cart" icon={faShoppingCart} onClick={handleAddToCart}  />
      </div>
    </div>
  );
}

export default ProductCard;

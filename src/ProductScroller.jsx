import ProductCard from './ProductCard.jsx'; 
import { useRef } from 'react';

function ProductScroller({ products, onProductClick, onShowNotification }) {
    const scrollRef = useRef(null);

    const scroll = (direction) => {
        const container = scrollRef.current;
        const scrollAmount = 300;
        container.scrollBy({
            left: direction === 'left' ? -scrollAmount : scrollAmount,
            behavior: 'smooth'
        });
    };

    return (
        <div className="scroller-wrapper">
            <button className="scroll-button prev" onClick={() => scroll('left')}>←</button>
            <div className="product-scroller" ref={scrollRef}>
                {products.map(product => (
                    <ProductCard 
                        key={product.id} 
                        product={product} 
                        onProductClick={onProductClick}
                        onShowNotification={onShowNotification}
                    />
                ))}
            </div>
            <button className="scroll-button next" onClick={() => scroll('right')}>→</button>
        </div>
    );
}

export default ProductScroller;
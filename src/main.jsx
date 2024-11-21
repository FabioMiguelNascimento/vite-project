import { createRoot } from "react-dom/client";
import { useState, useMemo } from "react";
import Navbar from "./Navbar";
import "./styles/import.scss";
import Swiper from "./Swiper";
import RegisterForm from "./RegisterForm";
import LoginForm from "./LoginForm";
import Notification from "./Notification";
import ProductScroller from "./ProductScroller";
import ProductPage from "./ProductPage";
import productList from "./productList";
import { CartProvider } from "./CartContext";
import Shopping from "./Shopping";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTruck,
  faShieldHalved,
  faCreditCard,
  faHeadset,
} from "@fortawesome/free-solid-svg-icons";
import { UserProvider } from "./UserContext";
import UserProfile from "./UserProfile";
import Footer from "./Footer";

let isLogedIn = false;

function App() {
  const [showRegister, setShowRegister] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [notifications, setNotifications] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);

  const handleSwitchToRegister = () => {
    setShowLogin(false);
    setShowRegister(true);
  };

  const handleSwitchToLogin = () => {
    setShowRegister(false);
    setShowLogin(true);
  };

  const handleCloseRegister = () => {
    setShowRegister(false);
  };

  const handleCloseLogin = () => {
    setShowLogin(false);
  };

  const showNotification = (title, content, color) => {
    const newNotification = {
      id: Date.now(),
      title,
      content,
      color,
      removing: false, // novo estado para controlar a animação
    };

    setNotifications((prev) => [newNotification, ...prev].slice(0, 4));

    setTimeout(() => {
      setNotifications((prev) =>
        prev.map((n) =>
          n.id === newNotification.id ? { ...n, removing: true } : n
        )
      );

      // Adiciona um segundo timeout para remover após a animação
      setTimeout(() => {
        setNotifications((prev) =>
          prev.filter((n) => n.id !== newNotification.id)
        );
      }, 300); // tempo da animação
    }, 5000);
  };

  const shuffleProducts = (products) => {
    return [...products].sort(() => Math.random() - 0.5);
  };

  const shuffledProducts1 = useMemo(() => shuffleProducts(productList), []);
  const shuffledProducts2 = useMemo(() => shuffleProducts(productList), []);
  const shuffledProducts3 = useMemo(() => shuffleProducts(productList), []);

  const handleProductClick = (product) => {
    setSelectedProduct(product);
  };

  const benefits = [
    { icon: faTruck, title: "Frete Grátis", desc: "Em compras acima de R$199" },
    {
      icon: faShieldHalved,
      title: "Compra Segura",
      desc: "Seus dados protegidos",
    },
    {
      icon: faCreditCard,
      title: "Parcele em até 12x",
      desc: "Sem juros no cartão",
    },
    {
      icon: faHeadset,
      title: "Suporte 24/7",
      desc: "Atendimento especializado",
    },
  ];

  return (
    <UserProvider>
      <CartProvider onShowNotification={showNotification}>
        <Navbar isLogedIn={isLogedIn} onOpenRegister={handleSwitchToRegister} />
        <UserProfile />
        <Shopping />
        {isCheckoutOpen ? (
          <CheckoutPage />
        ) : selectedProduct ? (
          <ProductPage
            product={selectedProduct}
            onClose={() => setSelectedProduct(null)}
            onShowNotification={showNotification}
          />
        ) : (
          <>
            <main>
              <section id="home" className="section-home">
                <Swiper />
                <div className="benefits">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="benefit-item">
                      <FontAwesomeIcon icon={benefit.icon} size="2x" />
                      <h3>{benefit.title}</h3>
                      <p>{benefit.desc}</p>
                    </div>
                  ))}
                </div>
              </section>

              <section id="products" className="section-products">
                <div className="featured">
                  <h2>Produtos em destaque</h2>
                  <ProductScroller
                    products={shuffledProducts1}
                    onProductClick={handleProductClick}
                    onShowNotification={showNotification}
                  />
                </div>

                <div className="promo-banner">
                  <div className="promo-left">
                    <h3>Ofertas Especiais</h3>
                    <p>Até 50% OFF</p>
                  </div>
                  <div className="promo-right">
                    <h3>Novidades</h3>
                    <p>Confira os lançamentos</p>
                  </div>
                </div>

                <div className="categories">
                  <h2>Navegue por Categorias</h2>
                  <ProductScroller
                    products={shuffledProducts2}
                    onProductClick={handleProductClick}
                    onShowNotification={showNotification}
                  />
                </div>

                <div className="deals">
                  <h2>Ofertas do Dia</h2>
                  <ProductScroller
                    products={shuffledProducts3}
                    onProductClick={handleProductClick}
                    onShowNotification={showNotification}
                  />
                </div>
              </section>

              <section className="why-choose-us">
                <h2>Por que nos escolher?</h2>
                <div className="stats-container">
                  <div className="stat-item">
                    <span className="stat-number">15k+</span>
                    <p>Clientes Satisfeitos</p>
                  </div>
                  <div className="stat-item">
                    <span className="stat-number">99%</span>
                    <p>Entregas no Prazo</p>
                  </div>
                  <div className="stat-item">
                    <span className="stat-number">24/7</span>
                    <p>Suporte Técnico</p>
                  </div>
                  <div className="stat-item">
                    <span className="stat-number">5k+</span>
                    <p>Produtos Disponíveis</p>
                  </div>
                </div>
              </section>

              <section id="contato" className="newsletter">
                <h3>Receba nossas novidades</h3>
                <p>Cadastre-se e ganhe 10% OFF na primeira compra!</p>
                <div className="newsletter-form">
                  <div className="emailInpCtn">
                    <input type="email" id="newsletter-email" placeholder="" />
                    <label htmlFor="newsletter-email">Seu melhor e-mail</label>
                  </div>
                  <button>Cadastrar</button>
                </div>
              </section>

              {showRegister && (
                <RegisterForm
                  onSwitchToLogin={handleSwitchToLogin}
                  onClose={handleCloseRegister}
                  onShowNotification={showNotification}
                />
              )}
              {showLogin && (
                <LoginForm
                  onSwitchToRegister={handleSwitchToRegister}
                  onClose={handleCloseLogin}
                  onShowNotification={showNotification}
                />
              )}
            </main>
            <Footer />
          </>
        )}
        <div className="notiCtn">
          {notifications.map((notification) => (
            <Notification
              key={notification.id}
              title={notification.title}
              content={notification.content}
              color={notification.color}
              onRemove={() => {
                setNotifications((prev) =>
                  prev.map((n) =>
                    n.id === notification.id ? { ...n, removing: true } : n
                  )
                );
                setTimeout(() => {
                  setNotifications((prev) =>
                    prev.filter((n) => n.id !== notification.id)
                  );
                }, 300);
              }}
              removing={notification.removing}
            />
          ))}
        </div>
      </CartProvider>
    </UserProvider>
  );
}

createRoot(document.getElementById("root")).render(<App />);

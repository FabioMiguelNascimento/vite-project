import { Swiper, SwiperSlide  } from 'swiper/react';
import { Autoplay, A11y, Navigation } from "swiper/modules";

// Import Swiper styles
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import 'swiper/scss/scrollbar';

const SwiperComponent = () => {
  return (
    <Swiper
      modules={[Navigation, A11y, Autoplay]}
      spaceBetween={0}
      slidesPerView={1}
      navigation
      autoplay={{ disableOnInteraction: false, pauseOnMouseEnter: true }}
      loop={true}
      scrollbar={{ draggable: true }}
    >
      <SwiperSlide>
        <img src="/foto-1.jpg" alt="Computador Gamer Pro" />
        <h1>Computador Gamer Pro</h1>
        <p>Setup completo para gamers exigentes, ideal para jogos em alta performance</p>
      </SwiperSlide>
      <SwiperSlide>
        <img src="/foto-2.jpg" alt="Computador de Escritório" />
        <h1>Computador de Escritório</h1>
        <p>Estação de trabalho completa para máxima produtividade</p>
      </SwiperSlide>
      <SwiperSlide>
        <img src="/foto-3.jpg" alt="Melhores Computadores" />
        <h1>Melhores Computadores</h1>
        <p>Venha conferir nossa linha completa <a href="#products">Ver Produtos</a> </p>
      </SwiperSlide>
    </Swiper>
  );
};

export default SwiperComponent;

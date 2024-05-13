import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import brand from "../../assets/images/brand.png";
import "swiper/swiper-bundle.css";
import { Autoplay } from "swiper/modules";

function Slider() {
  return (
    <div className="slider">
      <div className="container">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={50}
          scrollbar={{ draggable: true }}
          autoplay={{ delay: 2000, disableOnInteraction: false }}
          loop={true}
          breakpoints={{
            992: {
              slidesPerView: 5,
            },
            767: {
              slidesPerView: 3,
            },
            576: {
              slidesPerView: 1,
            },
          }}
        >
          <SwiperSlide>
            <img src={brand} alt="brand" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={brand} alt="brand" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={brand} alt="brand" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={brand} alt="brand" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={brand} alt="brand" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={brand} alt="brand" />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}

export default Slider;

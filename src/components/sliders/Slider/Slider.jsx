import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import abb from "../../../assets/images/logos/abb.png";
import acoem from "../../../assets/images/logos/acoem.png";
import bosch from "../../../assets/images/logos/bosch.png";
import drb from "../../../assets/images/logos/drb.png";
import enda from "../../../assets/images/logos/enda.png";
import fag from "../../../assets/images/logos/FAG.png";
import fkd from "../../../assets/images/logos/fkd.png";
import koyo from "../../../assets/images/logos/koyo.png";
import nth from "../../../assets/images/logos/nth.png";
import pakens from "../../../assets/images/logos/pakens.png";
import rdi from "../../../assets/images/logos/RDI.png";
import shimge from "../../../assets/images/logos/shimge.png";
import shnider from "../../../assets/images/logos/shnider.png";
import siemens from "../../../assets/images/logos/siemens.png";
import suptex from "../../../assets/images/logos/suptex.png";
import yato from "../../../assets/images/logos/yato.png";
import "swiper/swiper-bundle.css";
import { Autoplay } from "swiper/modules";

function Slider() {
  return (
    <div className="slider">
      <div className="container my-10">
        <Swiper
          className="slider-custom"
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
            <img src={abb} alt="abb" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={acoem} alt="brand" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={bosch} alt="brand" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={drb} alt="brand" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={enda} alt="brand" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={fag} alt="brand" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={fkd} alt="brand" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={koyo} alt="brand" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={nth} alt="brand" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={pakens} alt="brand" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={rdi} alt="brand" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={shimge} alt="brand" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={shnider} alt="brand" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={siemens} alt="brand" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={suptex} alt="brand" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={yato} alt="brand" />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}

export default Slider;

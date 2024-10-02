import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";
import PartnerItem from "./PartnerItem";
import SectionHeader from "../../layout/SectionHeader/SectionHeader";
import rise from "../../../assets/images/rise-logo.png";
import marquimm from "../../../assets/images/marquimm-logo.png";
import mt from "../../../assets/images/mt-logo.png";
import rhsonic from "../../../assets/images/rhosonics-logo.png";

const partners = [
  { img: rise, name: "Ri-Se" },
  { img: marquimm, name: "Marquimm" },
  { img: mt, name: "Deep Mineral Process Teknoloji" },
  { img: rhsonic, name: "Rhsonics" },
];

const PartnerSection = () => {
  return (
    <section className="partnership">
      <SectionHeader
        span="our partners"
        head="Partnership"
        textPosition="center"
      />
      <div className="container">
        <Swiper
          effect="coverflow"
          grabCursor
          centeredSlides
          slidesPerView={3}
          pagination={{ clickable: true }}
          loop
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            767: { slidesPerView: 3 },
            576: { slidesPerView: 1 },
          }}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 200,
            modifier: 1,
            scale: 1.1,
            slideShadows: false,
          }}
          modules={[EffectCoverflow, Pagination, Autoplay]}
          className="mySwiper"
        >
          {partners.map((partner, index) => (
            <SwiperSlide key={index}>
              <PartnerItem img={partner.img} name={partner.name} content="" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default PartnerSection;

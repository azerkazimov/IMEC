import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";
import PartnerItem from "./PartnerItem";
import SectionHeader from "../../layout/SectionHeader/SectionHeader";

function Partner() {
  return (
    <section className="partnership">
      <SectionHeader
        span="our partners"
        head="Partnership"
        textPosition="center"
      />
      <div className="container">
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={3}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={{ clickable: true }}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[EffectCoverflow, Pagination, Autoplay]}
          className="mySwiper"
        >
          <SwiperSlide>
            <PartnerItem
              img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcX4jYdDQCz2IEAa9AsdnIUls0ihhsIx_EaqTHRYAsvzgGFzhuZVMBRS_K6uls5ss6ZRg&usqp=CAU"
              name="Partner Name"
              content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas quaerat,
              pariatur a illo in incidunt molestias!"
            />
          </SwiperSlide>
          <SwiperSlide>
            <PartnerItem
              img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcX4jYdDQCz2IEAa9AsdnIUls0ihhsIx_EaqTHRYAsvzgGFzhuZVMBRS_K6uls5ss6ZRg&usqp=CAU"
              name="Partner Name"
              content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas quaerat,
              pariatur a illo in incidunt molestias!"
            />
          </SwiperSlide>
          <SwiperSlide>
            <PartnerItem
              img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcX4jYdDQCz2IEAa9AsdnIUls0ihhsIx_EaqTHRYAsvzgGFzhuZVMBRS_K6uls5ss6ZRg&usqp=CAU"
              name="Partner Name"
              content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas quaerat,
              pariatur a illo in incidunt molestias!"
            />
          </SwiperSlide>
          <SwiperSlide>
            <PartnerItem
              img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcX4jYdDQCz2IEAa9AsdnIUls0ihhsIx_EaqTHRYAsvzgGFzhuZVMBRS_K6uls5ss6ZRg&usqp=CAU"
              name="Partner Name"
              content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas quaerat,
              pariatur a illo in incidunt molestias!"
            />
          </SwiperSlide>
          <SwiperSlide>
            <PartnerItem
              img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcX4jYdDQCz2IEAa9AsdnIUls0ihhsIx_EaqTHRYAsvzgGFzhuZVMBRS_K6uls5ss6ZRg&usqp=CAU"
              name="Partner Name"
              content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas quaerat,
              pariatur a illo in incidunt molestias!"
            />
          </SwiperSlide>
          <SwiperSlide>
            <PartnerItem
              img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcX4jYdDQCz2IEAa9AsdnIUls0ihhsIx_EaqTHRYAsvzgGFzhuZVMBRS_K6uls5ss6ZRg&usqp=CAU"
              name="Partner Name"
              content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas quaerat,
              pariatur a illo in incidunt molestias!"
            />
          </SwiperSlide>
          <SwiperSlide>
            <PartnerItem
              img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcX4jYdDQCz2IEAa9AsdnIUls0ihhsIx_EaqTHRYAsvzgGFzhuZVMBRS_K6uls5ss6ZRg&usqp=CAU"
              name="Partner Name"
              content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas quaerat,
              pariatur a illo in incidunt molestias!"
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
}

export default Partner;

import PartnerSection from "../../components/sliders/PartnerSection/PartnerSection.jsx";
import Slider from "../../components/sliders/Slider/Slider.jsx";
import {
  About,
  Advantages,
  Header,
  Service,
} from "../../components/views/HomePage/index.jsx";
function Main() {
  return (
    <>
      <Header />
      <Slider />
      <About />
      <Service />
      <Advantages />
      <PartnerSection />
    </>
  );
}

export default Main;

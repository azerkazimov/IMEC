import Partner from "../../components/sliders/Partner/Partner.jsx";
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
      <Partner />
    </>
  );
}

export default Main;

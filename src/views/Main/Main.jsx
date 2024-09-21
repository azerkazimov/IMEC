import { Helmet } from "react-helmet";
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
      <Helmet>
        <link rel="canonical" href="https://imec.az/" />
        <meta name="description" content="imec engineering company" />
        <meta name="keywords" content="imec maintenance " />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://imec.az/" />
        <meta property="og:title" content="IMEC engineering company" />
        <meta
          property="og:image"
          content="https://imec.az/assets/logo-CHKnKiKJ.png"
        />
      </Helmet>
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

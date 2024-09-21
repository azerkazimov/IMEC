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
        <title>IMEC Engineering | Industrial Maintenance & Consulting</title>
        <meta
          name="description"
          content="IMEC is a leading engineering company specializing in industrial maintenance, consulting, and reliability solutions."
        />
        <meta
          name="keywords"
          content="IMEC, industrial maintenance, engineering consulting, equipment reliability, predictive maintenance"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://imec.az/" />
        <meta
          property="og:title"
          content="IMEC Engineering | Industrial Maintenance & Consulting"
        />
        <meta
          property="og:description"
          content="IMEC offers cutting-edge industrial maintenance and consulting services, ensuring optimal performance and reliability of your equipment."
        />
        <meta
          property="og:image"
          content="https://imec.az/assets/logo-CHKnKiKJ.png"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="IMEC Engineering | Industrial Maintenance & Consulting"
        />
        <meta
          name="twitter:description"
          content="IMEC offers cutting-edge industrial maintenance and consulting services."
        />
        <meta
          name="twitter:image"
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

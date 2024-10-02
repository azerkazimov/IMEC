import PageHeader from "../../layout/PageHeader/PageHeader.jsx";
import useOrderStore from "../../../store/orderStore.jsx";
import Order from "./Order.jsx";
import { Helmet } from "react-helmet";

function Basket() {
  const order = useOrderStore((state) => state.order);
  return (
    <>
      <Helmet>
        <link rel="canonical" href="https://imec.az/" />
        <title>IMEC Engineering | Basket</title>
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
        <meta property="og:title" content="IMEC Engineering | Basket" />
        <meta
          property="og:description"
          content="IMEC offers cutting-edge industrial maintenance and consulting services, ensuring optimal performance and reliability of your equipment."
        />
        <meta
          property="og:image"
          content="https://imec.az/assets/logo-CHKnKiKJ.png"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="IMEC Engineering | Basket" />
        <meta
          name="twitter:description"
          content="IMEC offers cutting-edge industrial maintenance and consulting services."
        />
        <meta
          name="twitter:image"
          content="https://imec.az/assets/logo-CHKnKiKJ.png"
        />
      </Helmet>
      <div className="basket">
        <PageHeader name="Basket" />
        <div className="container">
          <div className="orders-tab">
            {order.map((item) => {
              return (
                <Order
                  key={item.id}
                  id={item.id}
                  name={item.name}
                  description={item.description}
                  img={item.img}
                />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default Basket;

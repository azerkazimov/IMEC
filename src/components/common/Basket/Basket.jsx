import PageHeader from "../../layout/PageHeader/PageHeader.jsx";
import useOrderStore from "../../../store/orderStore.jsx";
import Order from "./Order.jsx";

function Basket() {
  const order = useOrderStore((state) => state.order);
  return (
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
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Basket;

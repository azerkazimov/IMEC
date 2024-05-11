import PageHeader from "../PageHeader/PageHeader";
import useOrderStore from "../store/orderStore";
import Order from "./Order";

function Basket() {
  const order = useOrderStore((state) => state.order);
  return (
    <div className="basket">
      <PageHeader name="Basket" />
      <div className="container">
        <div className="row">
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

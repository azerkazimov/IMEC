import PropTypes from "prop-types";
import pump from "../../assets/images/pump.png";
import useOrderStore from "../../store/orderStore.jsx";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

function ProductItem({ id, name, category, description, brand, img }) {
  const state = useOrderStore((state) => state);

  const formattedName = name.replace(/\s+/g, "-");
  const navigate = useNavigate();

  const handleOrder = () => {
    const newOrder = {
      id: id,
      name: name,
      description: description,
    };
    const itemExist = state.order.some((order) => order.id === id);
    if (itemExist) {
      toast.error(`${name} is alredy in the order`);
    } else {
      state.addToOrder(newOrder);
      toast.success(`${name} added successfully`);
    }
  };

  return (
    <>
      <div className="col-12 col-md-4 p-1">
        <div
          className="products-item"
          onClick={() => {
            navigate(
              `/product-item/${id}/${encodeURIComponent(formattedName)}`,
              { state: { category, description, brand, img } }
            );
          }}
        >
          <img src={pump} alt={name} />
          <div className="products-description" id={id}>
            <h4>{name}</h4>
            <p>{description}</p>
            <p>{brand}</p>
            <button
              className="btn"
              onClick={(e) => {
                e.stopPropagation();
                handleOrder();
              }}
            >
              Order
            </button>
          </div>
        </div>
      </div>
      
    </>
  );
}

ProductItem.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  category: PropTypes.string,
  img: PropTypes.string,
  description: PropTypes.string,
  brand: PropTypes.string,
};

export default ProductItem;

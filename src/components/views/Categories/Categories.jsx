import axios from "axios";
import { useEffect, useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import PageHeader from "../../layout/PageHeader/PageHeader";

function Categories() {
  const [data, setData] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    axios
      .get("https://imec-db.vercel.app/products")
      .then((res) => {
        setData(res.data);
        if (res.data.length > 0 && res.data[0].items.length > 0) {
          setSelectedCategory(res.data[0].items[0]);
          setSelectedItem(res.data[0].items[0]?.id);
        }
      })
      .catch((error) => console.log(error));
  }, []);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setSelectedItem(category.id);
  };

  return (
    <>
      <PageHeader name="Product & System" />
      <div className="product-categories">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-3 category-name flex-container flex-align-sm-center p-3">
              {data.map((category) => (
                <ul key={category.id} className="category-container row">
                  {category.items.map((item) => (
                    <RouterLink
                      onClick={() => handleCategoryClick(item)}
                      key={item.id}
                    >
                      <li
                        className={
                          selectedItem === item.id ? "active-category" : ""
                        }
                      >
                        {item.name}
                      </li>
                    </RouterLink>
                  ))}
                </ul>
              ))}
            </div>
            <div className="col-12 col-md-9 categories">
              {selectedCategory && (
                <div className="row">
                  {selectedCategory.subItems.map((subitem) => (
                    <div
                      className="col-12 col-md-6 col-lg-4 category-item p-3"
                      key={subitem.id}
                    >
                      <RouterLink to={subitem.path}>
                        <img
                          src={`https://imec-db.vercel.app${subitem.img}`}
                          alt={subitem.name}
                        />
                        <p>{subitem.name}</p>
                      </RouterLink>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Categories;

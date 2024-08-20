import axios from "axios";
import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { Link as RouterLink } from "react-router-dom";
import Loader from "../../layout/Loader/Loader";
import PageHeader from "../../layout/PageHeader/PageHeader";
import { FaAngleRight } from "react-icons/fa";

function Categories() {
  const fetchCategories = async () => {
    const { data } = await axios.get("https://imec-db.vercel.app/products");
    return data;
  };

  const { data, error, isLoading } = useQuery("products", fetchCategories);

  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    if (data && data.length > 0 && data[0].items.length > 0) {
      setSelectedCategory(data[0].items[0]);
      setSelectedItem(data[0].items[0].id);
    }
  }, [data]);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setSelectedItem(category.id);
  };

  if (isLoading || !data) return <Loader />;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <>
      <PageHeader name="Product & System" />
      <div className="product-categories mt-5">
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
            <div className="col-12 col-md-9">
              {selectedCategory && (
                <div className="categories row">
                  {selectedCategory.subItems.map((subitem) => (
                    <div
                      className="col-12 col-md-6 col-lg-4 p-1"
                      key={subitem.id}
                    >
                      <div className="category-item p-1">
                        <RouterLink to={subitem.path}>
                          <div className="category-item-img">
                            <img
                              src={`https://imec-db.vercel.app${subitem.img}`}
                              alt={subitem.name}
                            />
                          </div>
                          <div className="category-item-name">
                            <p>{subitem.name}</p>
                            <FaAngleRight />
                          </div>
                        </RouterLink>
                      </div>
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

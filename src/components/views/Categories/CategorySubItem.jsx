import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Lightbox from "yet-another-react-lightbox";
import Loader from "../../layout/Loader/Loader";
import PageHeader from "../../layout/PageHeader/PageHeader";
import PropTypes from "prop-types";

const fetchSubCatData = async (categoryPath, itemPath, subCat, type) => {
  const url =
    type === "product"
      ? "https://imec-db.vercel.app/products"
      : "https://imec-db.vercel.app/maintenance";
  const { data } = await axios.get(url);

  if (type === "product") {
    const productItem = data
      .flatMap((product) => product.items.flatMap((item) => item.subItems))
      .find((subItem) => subItem.path && subItem.path.includes(itemPath));

    if (productItem && productItem.subCats) {
      return productItem.subCats.find(
        (cat) => cat.path && cat.path.includes(subCat)
      );
    }
  } else if (type === "repair" || type === "service") {
    const firstItem = data[0];
    // console.log("first item", firstItem);
    // console.log(itemPath);

    const items = type === "service" ? firstItem.service : firstItem.repair;
    console.log(items);

    const maintenanceItem = items.find((item) => item.path.includes(itemPath));

    if (maintenanceItem && maintenanceItem.subCats) {
      return maintenanceItem.subCats.find(
        (cat) => cat.path && cat.path.includes(subCat)
      );
    }
  }

  return null;
};

function CategorySubItem({ type }) {
  const { categoryPath, itemPath, subCats } = useParams();
  const [subCatData, setSubCatData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchSubCatData(categoryPath, itemPath, subCats, type);
      setSubCatData(data);
      setIsLoading(false);
    };
    fetchData();
  }, [categoryPath, itemPath, subCats, type]);

  useEffect(() => {
    setCurrentIndex(0);
    setIsLightboxOpen(false);
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  let elemImages = [];
  if (subCatData && subCatData.images && subCatData.images.length > 0) {
    elemImages = subCatData.images.map((img) => ({
      src: `https://imec-db.vercel.app${img.imgPath}`,
      alt: img.alt,
    }));
  }

  const openLightbox = (index) => {
    setCurrentIndex(index);
    setIsLightboxOpen(true);
  };

  const closeLightbox = () => {
    setIsLightboxOpen(false);
  };

  if (!subCatData) {
    return <div>No sub-category found</div>;
  }

  return (
    <div className="category-sub-item">
      <PageHeader name={subCatData.name} />
      <div className="container">
        <h2 className="text-align-center my-4">{subCatData.title}</h2>
        <p className="text-align-center">{subCatData.description}</p>
      </div>
      {subCatData.sectionImg_1 && (
        <div className="container my-10">
          <div className="row">
            <div className="col-12 col-md-6 img-container">
              <img
                src={`https://imec-db.vercel.app${subCatData.sectionImg_1}`}
                alt={subCatData.name}
                className="main-img"
              />
            </div>
            <div className="col-12 col-md-6 px-5 flex-container flex-align-center">
              <div className="element-description element-subtypes">
                <h2>{subCatData.head_1}</h2>
                {Array.isArray(subCatData.paragraph_1) ? (
                  <ul>
                    {subCatData.paragraph_1.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                ) : (
                  <p>{subCatData.paragraph_1}</p>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
      {subCatData.sectionImg_2 && subCatData.paragraph_2 && (
        <div className="container my-10">
          <div className="row">
            <div className="col-12 col-md-6 px-5 flex-container flex-align-center">
              <div className="element-description">
                <h2>{subCatData.head_2}</h2>
                <p>{subCatData.paragraph_2}</p>
              </div>
            </div>
            <div className="col-12 col-md-6 img-container">
              <img
                src={`https://imec-db.vercel.app${subCatData.sectionImg_2}`}
                alt={subCatData.name}
                className="main-img"
              />
            </div>
          </div>
        </div>
      )}
      {subCatData.sectionImg_3 && (
        <div className="container my-10">
          <div className="row">
            <div className="col-12 col-md-6 img-container">
              <img
                src={`https://imec-db.vercel.app${subCatData.sectionImg_3}`}
                alt={subCatData.name}
                className="main-img"
              />
            </div>
            <div className="col-12 col-md-6 px-5 flex-container flex-align-center">
              <div className="element-description">
                <h2>{subCatData.head_3}</h2>
                <p>{subCatData.paragraph_3}</p>
              </div>
            </div>
          </div>
        </div>
      )}
      {subCatData.sectionImg_4 && (
        <div className="container my-10">
          <div className="row">
            <div className="col-12 col-md-6 px-5 flex-container flex-align-center">
              <div className="element-description">
                <h2>{subCatData.head_4}</h2>
                <p>{subCatData.paragraph_4}</p>
              </div>
            </div>
            <div className="col-12 col-md-6 img-container">
              <img
                src={`https://imec-db.vercel.app${subCatData.sectionImg_4}`}
                alt={subCatData.name}
                className="main-img"
              />
            </div>
          </div>
        </div>
      )}
      {subCatData.sectionImg_5 && (
        <div className="container my-10">
          <div className="row">
            <div className="col-12 col-md-6 img-container">
              <img
                src={`https://imec-db.vercel.app${subCatData.sectionImg_5}`}
                alt={subCatData.name}
                className="main-img"
              />
            </div>
            <div className="col-12 col-md-6 px-5 flex-container flex-align-center">
              <div className="element-description">
                <h2>{subCatData.head_5}</h2>
                <p>{subCatData.paragraph_5}</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {subCatData.images && subCatData.images.length > 0 && (
        <div className="container my-10">
          <div className="col-12 element-subtypes">
            <h2>{subCatData.typesHeader}</h2>
          </div>
          <div className="row element-images">
            {subCatData.images.map((img, index) => (
              <div className="col-12 col-md-4 p-1" key={index}>
                <img
                  src={`https://imec-db.vercel.app${img.imgPath}`}
                  alt={img.alt}
                  onClick={() => openLightbox(index)}
                  style={{ cursor: "pointer" }}
                />
              </div>
            ))}
          </div>
        </div>
      )}

      <Lightbox
        open={isLightboxOpen}
        close={closeLightbox}
        slides={elemImages}
        currentIndex={currentIndex}
        onSlideChange={(index) => setCurrentIndex(index)}
      />
    </div>
  );
}

CategorySubItem.propTypes = {
  type: PropTypes.string,
};

export default CategorySubItem;

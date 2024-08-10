import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { useQuery } from "react-query";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Lightbox } from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Loader from "../../layout/Loader/Loader";
import PageHeader from "../../layout/PageHeader/PageHeader";

const fetchProducts = async () => {
  const { data } = await axios.get("https://imec-db.vercel.app/products");
  return data;
};

function CategoryItem() {
  const { itemPath } = useParams();
  const navigate = useNavigate();
  const imgContainerRef = useRef(null);
  const zoomRef = useRef(null);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const { data: products, isLoading } = useQuery("products", fetchProducts);

  useEffect(() => {
    setCurrentIndex(0);
    setIsLightboxOpen(false);
  }, []);

  if (isLoading || !products) {
    return <Loader />;
  }

  const currentItem = products
    ?.flatMap((product) => product.items.flatMap((item) => item.subItems))
    .find((subItem) => subItem.path.includes(itemPath));

  if (!currentItem) {
    return <div>No item found</div>;
  }

  let elemImages = [];
  if (currentItem && currentItem.images && currentItem.images.length > 0) {
    elemImages = currentItem.images.map((img) => ({
      src: `https://imec-db.vercel.app${img.imgPath}`,
      alt: img.alt,
    }));
  }

  const handleMouseMove = (e) => {
    if (!imgContainerRef.current || !zoomRef.current) return;
    const { left, top, width, height } =
      imgContainerRef.current.getBoundingClientRect();
    const x = e.clientX - left;
    const y = e.clientY - top;

    const posX = (x / width) * 100;
    const posY = (y / height) * 100;

    zoomRef.current.style.backgroundPosition = `${posX}% ${posY}%`;
  };

  const openLightbox = (index) => {
    setCurrentIndex(index);
    setIsLightboxOpen(true);
  };

  const closeLightbox = () => {
    setIsLightboxOpen(false);
  };

  const handleDetailsClick = (subCatPath) => {
    navigate(subCatPath);
  };

  return (
    <>
      <PageHeader name={currentItem.name} />
      <div className="currentItem-element my-5">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-6">
              <div
                className="img-container"
                ref={imgContainerRef}
                onMouseMove={handleMouseMove}
              >
                <img
                  src={`https://imec-db.vercel.app${currentItem.sectionImg}`}
                  alt={currentItem.name}
                  className="main-img"
                />
                <div
                  className="zoom-img"
                  ref={zoomRef}
                  style={{
                    backgroundImage: `url(https://imec-db.vercel.app${currentItem.sectionImg})`,
                  }}
                ></div>
              </div>
            </div>
            <div className="col-12 col-md-6 px-5 flex-container flex-align-center">
              <div className="element-description">
                <h2>{currentItem.title}</h2>
                <p>{currentItem.description}</p>
                <div className="btn-store-start">
                  <Link to="/get-a-quote">
                    <button className="btn">More Info</button>
                  </Link>
                  <Link to="/products">
                    <button className="btn">Back to Products</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {currentItem.types && currentItem.types.length > 0 && (
            <div className="container mt-10">
              <div className="row">
                <div className="col-12 element-subtypes">
                  <h2>{currentItem.typesHeader}</h2>
                  <p>{currentItem.typesDescription}</p>
                  <h4>{currentItem.types.typeHead}</h4>
                  <ul>
                    {currentItem.types.map((type) => (
                      <li key={type.id}>
                        <span>{type.type}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          )}

          {currentItem.subCats && currentItem.subCats.length > 0 && (
            <div className="container">
              <h2 className="my-5">Sub Categories</h2>
              <div className="row">
                {currentItem.subCats.map((subcat, index) => (
                  <div className="col-12 col-md-6 col-lg-4 p-1" key={index}>
                    <div className="element-subcat">
                      <img
                        src={`https://imec-db.vercel.app${subcat.img}`}
                        alt={subcat.name}
                      />
                      <span>{subcat.name}</span>
                      <button
                        className="btn"
                        onClick={() => handleDetailsClick(subcat.path)}
                      >
                        Details
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {currentItem.categories && currentItem.categories.length > 0 && (
            <div className="container">
              <TableContainer component={Paper}>
                <Table aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      <TableCell align="center">Category</TableCell>
                      <TableCell align="center">Model</TableCell>
                      <TableCell align="center">Dimension</TableCell>
                      <TableCell align="center">Setting</TableCell>
                      <TableCell align="center">Capacity</TableCell>
                      <TableCell align="center">Power</TableCell>
                      <TableCell align="center">Weight</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {currentItem.categories.map((category, categoryIndex) => (
                      <React.Fragment key={categoryIndex}>
                        <TableRow>
                          <TableCell
                            align="center"
                            colSpan={7}
                            style={{
                              backgroundColor: "#f0f0f0",
                              fontWeight: "bold",
                            }}
                          >
                            {category.category}
                          </TableCell>
                        </TableRow>
                        {category.models.map((model, modelIndex) => (
                          <TableRow key={modelIndex}>
                            <TableCell align="center">
                              {category.category}
                            </TableCell>
                            <TableCell align="center">{model.model}</TableCell>
                            <TableCell align="center">
                              {model.dimension}
                            </TableCell>
                            <TableCell align="center">
                              {model.setting}
                            </TableCell>
                            <TableCell align="center">
                              {model.capacity}
                            </TableCell>
                            <TableCell align="center">{model.power}</TableCell>
                            <TableCell align="center">{model.weight}</TableCell>
                          </TableRow>
                        ))}
                      </React.Fragment>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </div>
          )}

          {currentItem.images && currentItem.images.length > 0 && (
            <div className="my-10">
              <div className="col-12 element-subtypes">
                <h2>{currentItem.typesHeader}</h2>
              </div>
              <div className="row element-images">
                {currentItem.images.map((img, index) => (
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
      </div>
    </>
  );
}

export default CategoryItem;

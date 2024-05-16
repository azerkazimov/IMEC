import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function CatalogueItem({ id, title, pdfSrc }) {
  const openPdfInNewWindow = () => {
    window.open(`https://imec-db.vercel.app${pdfSrc}`, "_blank");
  };
  return (
    <div className="col-12 col-md-6 col-lg-4 p-1">
      <div className="catalogue-item" id={id}>
        <div>
          <iframe src={`https://imec-db.vercel.app${pdfSrc}`}></iframe>
          <Link
            to={`https://imec-db.vercel.app${pdfSrc}`}
            target="_blank"
            download={`${title}.pdf`}
          >
            Download PDF
          </Link>
        </div>
        <h4 onClick={openPdfInNewWindow}>{title}</h4>
      </div>
    </div>
  );
}

CatalogueItem.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  pdfSrc: PropTypes.string,
};

export default CatalogueItem;

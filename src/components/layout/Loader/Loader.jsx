import { useEffect, useState } from "react";
import loader from "../../../assets/imec-load.mp4";

function Loader() {
  const [isLoading, setIsLoading] = useState(null);
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      <>
        {isLoading ? (
          <div className="loader-container">
            <video autoPlay loop muted className="video-bg">
              <source src={loader} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div className="loader-text">Loading...</div>
          </div>
        ) : (
          <div>Content loaded!</div>
        )}
      </>
    </>
  );
}

export default Loader;

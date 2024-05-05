import { useEffect, useState } from "react";
import PropTypes from "prop-types";

function Counter({ end, interval }) {
  const [counter, setCounter] = useState(0);
  useEffect(() => {
    const intervalId = setInterval(() => {
      if (counter < end) {
        setCounter((prev) => prev + 1);
      } else {
        clearInterval(intervalId);
      }
    }, interval);
    return () => clearInterval(intervalId);
  }, [counter, end, interval]);
  return (
    <div className="counter">
      <span>{counter}</span>{" "}
    </div>
  );
}

Counter.propTypes = {
  end: PropTypes.number.isRequired,
  interval: PropTypes.number.isRequired,
};

export default Counter;

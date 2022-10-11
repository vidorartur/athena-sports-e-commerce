import React from "react";
import PropTypes from "prop-types";
import { useHistory } from "react-router-dom";
import "./ShoppingPayment.css";

function ShoppingPayment(props) {
  const { total } = props;
  const history = useHistory();
  return (
    <div>
      <div className="shopping__payment">
        <button
          type="button"
          onClick={() => history.push("/")}
          className="btn-primary"
        >
          <h5>
            Back to Shopping
          </h5>

        </button>
        <p>
          Total:
          <br />
          $
          {total.reduce((acc, current) => acc + current, 0).toFixed(2)}
        </p>
        <button
          type="button"
          onClick={() => history.push("/")}
          className="btn-primary"
        >
          <h5>
            CheckOut
          </h5>

        </button>
      </div>
    </div>
  );
}

ShoppingPayment.propTypes = {
  total: PropTypes.number.isRequired,
};

export default ShoppingPayment;

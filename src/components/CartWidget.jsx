import React from "react";
import logo from "../assets/img/milogo.png";

const CartWidget = () => {
  return (
    <>
      <button className="btn btn-outline-primary">
        <img src={logo} alt="Logo" style={{ width: "40px" }} />
        {/*<span className="badge bg-danger">3</span> */}
      </button>
    </>
  );
};

export default CartWidget;

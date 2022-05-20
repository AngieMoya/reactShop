import React from "react";
import "../styles/ContMyOrder.scss";
import MyOrdersItem from "../components/MyOrdersItem";
import ShoppingCartItem from "../components/ShoppingCartItem";

const ContMyOrder = () => {
  return (
    <div className="my-order-container">
      <h1 className="title-my-order">My order</h1>
      <div className="my-order-content">
        <MyOrdersItem />
      </div>
      <ShoppingCartItem />
    </div>
  );
};

export default ContMyOrder;
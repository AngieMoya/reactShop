import React from "react";
import "../styles/ContMyOrders.scss";
import MyOrdersItem from "../components/MyOrdersItem";

const ContMyOrders = () => {
  return (
    <div className="my-order-container">
      <h1 className="title-my-order">My orders</h1>
      <div className="my-order-content">
        <MyOrdersItem />
      </div>
    </div>
  );
};

export default ContMyOrders;

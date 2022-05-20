import React, {useContext} from "react";
import "../styles/Checkout.scss";
import ShoppingCartItem from "../components/ShoppingCartItem";
import MyOrder from "../components/MyOrdersItem";
import Button from "../components/Button";
import AppContext from '@context/AppContext';

import arrowLeft from '@icons/arrow-left.png';

const Checkout = () => {
  const {state} = useContext(AppContext);

  const sumTotal = () => {
    const reducer = (accumulator, currentValue) => accumulator + currentValue.price;
    const sum = state.cart.reduce(reducer, 0);
    return sum;

  }
  return (
    <>
      <aside className="product-detail shopping-cart-detail">
        <div className="title-container">
          <img src={arrowLeft} alt="arrow left" />
          <p className="title-shopping-cart">Shopping cart</p>
        </div>
        <div className="my-order-content">
          {state.cart.map((product, index) => (
            <ShoppingCartItem product={product} indexValue={index} key={product}/>
          ))}
          
        </div>
        <MyOrder>{sumTotal()}</MyOrder>
        <Button variant={"primary"} text="Checkout"></Button>
      </aside>
    </>
  );
};

export default Checkout;

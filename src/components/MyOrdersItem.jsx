import React, {useContext} from "react";
import "../styles/MyOrdersItem.scss";
import AppContext from '@context/AppContext';


import arrow from '@icons/flechita.svg';

const MyOrdersItem = ({children}) => {
  const {state} = useContext(AppContext);
  return (
    <div className="orders">
      <p>
        <span>04.25.2021</span>
        <span>{state.cart.length} articles</span>
      </p>
      <p>${children}</p>
      <img src={arrow} alt="arrow" />
    </div>
  );
};

export default MyOrdersItem;
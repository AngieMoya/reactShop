import React from "react";
import "../styles/DetailsProduct.scss";
import Button from "./Button";

import close from '@icons/icon_close.png';
import fride from '@images/fridge.png';
import addToCart from '@icons/bt_add_to_cart.svg';

const DetailsProduct = () => {
  return (
    <>
      <div className="product-detail-close">
        <img src={close} alt="Close" />
      </div>
      <img
        className="product-image"
        src={fride}
        alt="Refrigerator"
      />
      <div className="info-product">
        <p>$ 120,00</p>
        <p>Retro refrigerator</p>
        <p>
          With its functional and practical interior, this refrigerator also
          fulfills a decorative function, adding personality and a retro-vintage
          aesthetic to your kitchen or workplace.
        </p>
        <Button variant={"primary"} text="Add to cart" className="add-to-cart-button">
        <img src={addToCart} alt="Add to cart" />
        </Button>
      </div>
    </>
  );
};

export default DetailsProduct;

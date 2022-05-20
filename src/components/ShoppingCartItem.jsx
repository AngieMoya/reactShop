import React, {useContext} from "react";
import AppContext from '@context/AppContext';
import '@styles/ShoppingCartItem.scss';

import close from '@icons/icon_close.png';

const ShoppingCartItem = ({product, indexValue}) => {
  const { removeFromCart } = useContext(AppContext);
  const handleRemove = product => {
    removeFromCart(product);
  }
  return (
    <div className="shopping-cart">
      <figure>
        <img
          src={product.images[0]}
          alt={product.title}
        />
      </figure>
      <p>{product.title}</p>
      <p>$ {product.price}</p>
      <img src={close} alt="Close" onClick={() => handleRemove(indexValue)}/>
    </div>
  );
};

export default ShoppingCartItem;

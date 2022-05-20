import React, {useContext} from "react";
import ProductList from "@containers/ProductList";
import AppContext from '@context/AppContext';

const Home = () => {

  const {state} = useContext(AppContext);
  console.log({state});
  

  return (
    <>
      <ProductList />
    </>
  );
};

export default Home;

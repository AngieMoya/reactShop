import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "@containers/Layout";
import Login from "@pages/Login";
import PasswordRecovery from "@pages/PasswordRecovery";
import Home from "@pages/Home";
import NotFound from "@pages/NotFound";
import SendEmail from "@pages/SendEmail";
import NewPassword from "@pages/NewPassword";
import MyAccount from "@pages/MyAccount";
import MyEditAccount from "@pages/MyEditAccount";
import MyOrder from "@pages/MyOrder";
import MyOrders from "@pages/MyOrders";
import AppContext from "@context/AppContext";
import useInitialState from "@hooks/useInitialState";
import "@styles/global.scss";

const App = () => {
  const initialState = useInitialState();
  return (
    <AppContext.Provider value={initialState}>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/login" element={<Login />} />
            <Route
              exact
              path="recovery-password"
              element={<PasswordRecovery />}
            />
            <Route exact path="/send-email" element={<SendEmail />} />
            <Route exact path="/new-password" element={<NewPassword />} />
            <Route exact path="/create-account" element={<MyAccount />} />
            <Route exact path="/edit-account" element={<MyEditAccount />} />
            <Route exact path="/order" element={<MyOrder />} />
            <Route exact path="/orders" element={<MyOrders />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </AppContext.Provider>
  );
};

export default App;

import React, { useRef } from "react";
import "./styles.css";
import { Routes, Route, Navigate } from "react-router-dom";

import { CartContextProvider } from "context/CartContext";
import { AuthContextProvider } from "context/AuthContext";
import { useCartContext } from "context/CartContext";
import { useAuthContext } from "context/AuthContext";
import useOutsideClick from "hooks/useOutsideClick";
import ProductsPage from "pages/product/ProductsPage";
import ProductPage from "pages/product/ProductPage";
import PrivateRoute from "pages/login/PrivateRoute";
import LoginPage from "pages/login/LoginPage";
import RegisterPage from "pages/login/RegisterPage";
import ResetPage from "pages/login/ResetPage";
import AccountPage from "pages/login/AccountPage";
import SearchPage from "pages/search/SearchPage";
import NavBar from "components/navigation/NavBar";
import { Cart } from "components/cart/Cart";

function Root() {
  const { cartOpen, open } = useCartContext();
  const { isAuthenticated } = useAuthContext();

  const ref = useRef();

  useOutsideClick(ref, () => {
    open(false);
  });

  return (
    <div className="App">
      <NavBar />

      {cartOpen && (
        <div ref={ref}>
          <Cart />
        </div>
      )}
      <div>
        <Routes>
          <Route exact path="/" element={<ProductsPage />} />
          <Route exact path="/products/:category" element={<ProductsPage />} />
          <Route exact path="/products/page/:id" element={<ProductPage />} />
          <Route
            exact
            path="/account"
            element={
              <PrivateRoute>
                <AccountPage />
              </PrivateRoute>
            }
          />
          <Route
            exact
            path="/account/login"
            element={
              isAuthenticated ? <Navigate to="/account" /> : <LoginPage />
            }
          />
          <Route
            exact
            path="/account/register"
            element={
              isAuthenticated ? <Navigate to="/account" /> : <RegisterPage />
            }
          />
          <Route exact path="/reset" element={<ResetPage />} />
          <Route exact path="/search" element={<SearchPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <>
      <CartContextProvider>
        <AuthContextProvider>
          <Root />
        </AuthContextProvider>
      </CartContextProvider>
    </>
  );
}

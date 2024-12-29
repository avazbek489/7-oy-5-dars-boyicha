import React, { useEffect, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Products from "./pages/Products";
import MainLayout from "./layouts/MainLayout";
import AuthLayout from "./layouts/AuthLayout";

function App() {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const navigate = useNavigate();

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    setToken(storedToken);
    if (storedToken) {
      navigate("/");
    }
  }, [navigate]);

  function PrivateRoute({ isAuth, children }) {
    useEffect(() => {
      if (!isAuth) {
        navigate("/login");
      }
    }, [isAuth, navigate]);

    return isAuth ? children : null;
  }

  return (
    <Routes>
      <Route
        index
        element={
          <PrivateRoute isAuth={!!token}>
            <MainLayout>
              <Home />
            </MainLayout>
          </PrivateRoute>
        }
      />
      <Route
        path="/about"
        element={
          <PrivateRoute isAuth={!!token}>
            <MainLayout>
              <Products />
            </MainLayout>
          </PrivateRoute>
        }
      />
      <Route
        path="/login"
        element={
          <AuthLayout>
            <Login />
          </AuthLayout>
        }
      />
      <Route
        path="/register"
        element={
          <AuthLayout>
            <Register />
          </AuthLayout>
        }
      />
    </Routes>
  );
}

export default App;

import { useState, useEffect } from "react";
import "./App.css";
import config from "./config/config";
import authService from "./appwrite/auth";
import service from "./appwrite/services";
import { useDispatch } from "react-redux";
import { login, logout } from "./features/authSlice";
import { Header, Footer } from "./components";
import { Outlet } from "react-router-dom";

function App() {
  const [loading, setLoading] = useState(true);

  const dispatch = useDispatch();

  useEffect(() => {
    authService
      .getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login(userData));
        } else {
          dispatch(logout());
        }
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return !loading ? (
    <div className="flex flex-wrap bg-gray-400 min-h-screen">
      <div className="w-full block">
        <Header />
        <main>TODO{/* <Outlet /> */}</main>
        <Footer />
      </div>
    </div>
  ) : null;
}

export default App;

import React from "react";
//import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import { useLocation } from "react-router-dom";
import "swiper/css/bundle";
import AdminLayout from "./components/layouts/Admin";
import AppLayout from "./components/layouts/App";

const App = () => {
  const { pathname } = useLocation();
  if (pathname.startsWith("/auth")) return <AdminLayout />;
  return <AppLayout />;
};

export default App;

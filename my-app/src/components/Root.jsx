import React, { useEffect } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { Routes, Route, useParams } from "react-router-dom";
import Home from "../pages/Home/Home";
import SideBar from "./SideBar/SideBar";


function Root() {
  const { pathname } = useLocation();
  const navigate  = useNavigate()
  function navigateHome() {
   if( pathname === "/" ){ navigate('/home') }
  }
  useEffect(() => {
    navigateHome()
  }, [])
  return (
    <>
      <SideBar />
 

      <Outlet />
    </>
  );
}

export default Root;
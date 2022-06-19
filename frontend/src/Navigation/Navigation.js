import { Route,Routes } from "react-router-dom";
import { Switch } from "@mui/material";
import React from "react";
import Home from "../pages/Home/Home";
import Auth from "../pages/Auth/Auth"


const Navigation = (props) => {

  return (
    <>
      <Routes>
        <Route
          path="/"
          element ={<Home/>}
        />
        <Route
          path="/auth"
          element = {<Auth/>}

        />
      </Routes>
    </>
  );
};

export default Navigation;
import React from "react";
import Navbar from "./Header/Navbar";
import { useLocation } from "react-router";

const HomePage = () => {
  let location = useLocation();
  let userDetails = {
    userName: location.state.userDetails
      ? location.state.userDetails.username
      : location.state.response.profileObj.name,
    imageUrl: location.state.userDetails
      ? ""
      : location.state.response.profileObj.imageUrl,
  };
  return <Navbar userDetails={userDetails} />;
};

export default HomePage;

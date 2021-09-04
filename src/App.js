import Login from "./pages/Login";
import React from "react";
import SideBar from "./pages/sidebar/SideBar";
import Register from "./pages/register/Register";
import Home from "./pages/home/home";

function App() {
  return (
    <>
      <Login />
      <SideBar />
      <Register />
      {/* <Home /> */}
    </>
  );
}

export default App;

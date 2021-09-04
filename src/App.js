import Login from "./pages/Login";
import React from "react";
import SideBar from "./pages/sidebar/SideBar";
import Register from "./pages/register/Register";
import Dashboard from "./pages/dashboard/dashboard";
function App() {
  return (
    <>
      <Login />
      <SideBar />
      <Register />
      <Dashboard />
    </>
  );
}

export default App;

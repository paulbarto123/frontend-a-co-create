import Login from "./pages/member/login/Login";
import React from "react";
import SideBar from "./pages/admin/sidebar/SideBar";
import Register from "./pages/member/register/Register";
import Home from "./pages/member/home/home";
import Dashboard from "./pages/member/dashboard/dashboard";
import Project from "./pages/member/project/project";
import MyArticles from "./pages/member/myarticles/myarticles";
import CreateProject from "./pages/member/createproject/createproject";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Enrollment from "./pages/admin/enrollment/Enrollment";
function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/register" component={Register} />
          <Route path="/" exact component={Login} />
          <Route path="/member/beranda-artikel">
            <Dashboard>
              <MyArticles />
            </Dashboard>
          </Route>
          <Route path="/member/beranda-project">
            <Dashboard> 
              <Home />
            </Dashboard>
          </Route>
          <Route path="/member/project-saya">
            <Dashboard> 
              <Project />
            </Dashboard>
          </Route>
          <Route path="/member/buat-project">
            <Dashboard>
              <CreateProject />
            </Dashboard>
          </Route>
          <Route path="/home">
            <SideBar>
              <Home />
            </SideBar>
          </Route>
          <Route path="/beranda-admin">
            <SideBar>
              <Enrollment />
            </SideBar>
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;

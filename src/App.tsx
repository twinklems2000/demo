import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Sidebar from "./components/common/sidebar/Sidebar";
import RootRoutes from "./components/app/route/RootRoutes";
import Header from "./components/common/header/Header";

function App() {
  return (
    <>
    <Header />
      <div className="mainContainer">
        <Sidebar />
        <RootRoutes />
      </div>
    </>
  );
}

export default App;

import React, { useState } from "react";
import "./sidebar.css";
import { sidebarData } from "../../../constants/data";
import { useLocation, useNavigate } from "react-router-dom";
import Button from "../button/Button";
import LogoutIcon from "@mui/icons-material/Logout";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import Logo from "../../../assets/images/logo.jpg";

const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation()?.pathname;
  const [showSidbar, setShowSidbar] = useState(true);

  return (
    <>
      <div className={showSidbar ? "sidebarContainer" : "sidebarIcon"}>
        <img src={Logo} className="logoStyle" />
        {showSidbar && <h1 className="title">RONSTOP</h1>}
        <p className="iconStyle" onClick={() => setShowSidbar(!showSidbar)}>
          {showSidbar ? <ChevronRightIcon /> : <ChevronLeftIcon />}
        </p>
        <ul>
          {sidebarData?.map((item: any, index: number) => {
            return (
              <li
                className={location === item?.navigate ? "active" : "listData"}
                onClick={() => navigate(item?.navigate)}
                key={index}
              >
                {item?.icon}
                {showSidbar && (
                  <span style={{ marginLeft: "5px", width: "160px" }}>
                    {" "}
                    {item?.name}
                  </span>
                )}
              </li>
            );
          })}
        </ul>
        <Button
          title={
            <div className="btnStyle">
              <LogoutIcon /> {showSidbar && "Login"}
            </div>
          }
          handleClick={() => alert("You are Logged In")}
        />
      </div>
    </>
  );
};

export default Sidebar;

/* Packages import */
import React from "react";

/* Components import */
import { NavBar, ProfileCard, SearchBar } from "../../components";
import { Divider } from "@mui/material";

/* Style import */
import "./DashboardLayout.scss";

const DashboardLayout = (props) => {
  const { open, setOpen } = props;

  const handleMenu = () => {
    setOpen(!open);
  };

  const { children } = props;
  return (
    <div className="DashboardLayout">
      <div className="DashboardLayout--NavBar">
        <NavBar handleMenu={handleMenu} />
      </div>
      <Divider />
      <div className="DashboardLayout--Header">
        <div className="DashboardLayout--Header--Left">
          <SearchBar />
        </div>
        <div className="DashboardLayout--Header--Right">
          <ProfileCard />
        </div>
      </div>
      <div className="DashboardLayout--Body">{children}</div>
    </div>
  );
};

export default DashboardLayout;

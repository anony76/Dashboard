import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import BrightnessLowIcon from "@mui/icons-material/BrightnessLow";
import "./NavBar.scss";
const NavBar = (props) => {
  const { handleMenu } = props;

  return (
    <div className="NavBar">
      <div className="NavBar--Left">
        <div className="NavBar--Icon" onClick={handleMenu}>
          <MenuIcon fontSize="large" />
        </div>
      </div>
      <div className="NavBar--Right">
        <div className="NavBar--SettingIcon">
          <BrightnessLowIcon fontSize="large" />
        </div>
        <div className="NavBar--UserIcon">
          <div className="NavBar--User">UN</div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;

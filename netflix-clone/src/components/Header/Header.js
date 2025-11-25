import React from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import NetflixLogo from "../../assets/images/Netflix-Logo.png"
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const Header = () => {
  return (
    <div className="header-outer-container">
      <div className="header-container">
        <div className="header-left">
          <ul>
            <li>
              <img src={NetflixLogo} alt="Netflix logo" width="100" />
            </li>
            <li> Netflix</li>
            <li> Home </li>
            <li> TvShows </li>
            <li> Movies </li>
            <li> Latest </li>
            <li> MyList </li>
            <li> Browser by Languages </li>
          </ul>
        </div>
        <div className="header-right">
          <ul>
            <li>
              <SearchIcon />
            </li>
            <li><NotificationsNoneIcon />
            </li>
            <li><AccountBoxIcon /></li>
            <li><ArrowDropDownIcon/></li> 
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;

import React from "react";
import "./Header2.css";
import HomeIcon from "@material-ui/icons/Home";
import FlashOnIcon from "@material-ui/icons/FlashOn";
import LiveTvIcon from "@material-ui/icons/LiveTv";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import SearchIcon from "@material-ui/icons/Search";
import PersonIcon from "@material-ui/icons/Person";

function Header2() {
  return (
    <div className="header2">
      <div className="header2__icons">
        <div className="header2__icon">
          <HomeIcon />
          <p>HOME</p>
        </div>
        <div className="header2__icon">
          <FlashOnIcon />
          <p>FLASH MOVIE</p>
        </div>
        <div className="header2__icon">
          <LiveTvIcon />
          <p>TV SHOWS</p>
        </div>
        <div className="header2__icon">
          <VideoLibraryIcon />
          <p>LIBRARY</p>
        </div>
        <div className="header2__icon">
          <SearchIcon />
          <p>SEARCH</p>
        </div>
        <div className="header2__icon">
          <PersonIcon />
          <p>PERSONAL</p>
        </div>
        <div className="header2__icon">
          <VideoLibraryIcon />
          <p>LIBRARY</p>
        </div>
      </div>
      <img
        src="https://groundcontrolstudio.com/wp-content/uploads/2013/08/hulu-1024x342.png"
        alt=""
      />
    </div>
  );
}

export default Header2;

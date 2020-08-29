import React from "react";
import "./Header.css";
import HomeIcon from "@material-ui/icons/Home";
import FlashOnIcon from "@material-ui/icons/FlashOn";
import LiveTvIcon from "@material-ui/icons/LiveTv";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import SearchIcon from "@material-ui/icons/Search";
import PersonIcon from "@material-ui/icons/Person";

function Header(props) {
  return (
    <div className="header">
      <div className="header__icons">
        <div className="header__icon header__icon--active">
          <HomeIcon />
          <p>Home</p>
        </div>

        <div className="header__icon">
          <FlashOnIcon />
          <p>Trending</p>
        </div>

        <div className="header__icon">
          <LiveTvIcon />
          <p>Verified</p>
        </div>

        <div className="header__icon">
          <VideoLibraryIcon />
          <p>Collections</p>
        </div>

        <div className="header__icon">
          <SearchIcon />
          <p>Search</p>
        </div>

        <div className="header__icon">
          <PersonIcon />
          <p>Account</p>
        </div>
      </div>
      <img
        src="https://groundcontrolstudio.com/wp-content/uploads/2013/08/hulu-1024x342.png"
        alt=""
      />
    </div>
  );
}
// Movie TMDB
// APIKEY= 1186ed90ebdb9e45f740404aa06da53f
// Example API Request
// URL Testing: https://api.themoviedb.org/3/movie/550?api_key=1186ed90ebdb9e45f740404aa06da53f
// API Read Access Token (v4 auth)
// eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxMTg2ZWQ5MGViZGI5ZTQ1Zjc0MDQwNGFhMDZkYTUzZiIsInN1YiI6IjVmNDYyYTJhOGNmY2M3MDAzNTQ0YWRhMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.L3uJcaFkJqDH11vQb_WvUzWvAtac3tlK-rwOmzADohM

export default Header;

import React from "react";
import "./VideoCard.css";

function VideoCard({ movie }) {
  return (
    <div className="videoCard">
      <img
        src="https://kajabi-storefronts-production.global.ssl.fastly.net/kajabi-storefronts-production/themes/284832/settings_images/a3liO9nUSCyEhyiAnDOw_Profit-with-JavaScript-new.jpg"
        alt=""
      />
      <p>This is a film about coding</p>
      <h2>Movie Title</h2>
      <p>Number of Likes</p>
    </div>
  );
}

export default VideoCard;

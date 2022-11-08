import React from 'react';
import "./Header.css"

export default function Header() {
  return (
    <div className="header">
      <div className="search-bar">
      <i class="fa-solid fa-magnifying-glass"></i>
        <input type="text" className="search-box" />
      </div>
      <div className="profile-sml">
        <i></i>
        <img src="" alt="" className="profile-icon-sml" />
        <h3 className="profile-name-sml">User 1</h3>
      </div>
      <div className="profile">
        <img src="" alt="" className="profile-icon" />
        <p>Hi there,</p>
        <h2 className="profileName">User 1 (@user1)</h2>
      </div>
      <div className="button-row">
        <button>New</button>
        <button>Upload</button>
        <button>Share</button>
      </div>
    </div>
  );
}

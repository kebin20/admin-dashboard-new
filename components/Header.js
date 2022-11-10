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
      <i class="fa-solid fa-bell"></i>
        <img src="https://cdn-icons-png.flaticon.com/512/4322/4322991.png" alt="" className="profile-icon-sml"/>
        <h3 className="profile-name-sml">Tom Foolery</h3>
      </div>

      <div className="profile">
        <img src="https://cdn-icons-png.flaticon.com/512/4322/4322991.png" alt="" className="profile-icon"/>
        <div className="greeting">
          <p>Hi there,</p>
          <h3 className="profile-name">Tom Foolery (@fooltom)</h3>
        </div>
      </div>

      <div className="button-row">
        <button>New</button>
        <button>Upload</button>
        <button>Share</button>
      </div>
      
    </div>
  );
}

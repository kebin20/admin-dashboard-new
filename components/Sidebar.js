import React from 'react';
import './Sidebar.css';

export default function SideBar() {
  return (
    <div className="sidebar">
      <img
        src="https://cdn-icons-png.flaticon.com/512/1035/1035688.png"
        alt="dashboard"
        width="50"
      />
      <h1>Dashboard</h1>
      <div className="item-row-1">
        <i class="fa-solid fa-house"></i>
        <a href="" className="dashboard-items">
          <span>Home</span>
        </a>
        <i class="fa-solid fa-id-card"></i>
        <a href="" className="dashboard-items">
          <span>Profile</span>
        </a>
        <i class="fa-regular fa-message"></i>
        <a href="" className="dashboard-items">
          <span>Messages</span>
        </a>
        <i class="fa-solid fa-clock-rotate-left"></i>
        <a href="" className="dashboard-items">
          <span>History</span>
        </a>
        <i class="fa-solid fa-list-check"></i>
        <a href="" className="dashboard-items">
          <span>Tasks</span>
        </a>
        <i class="fa-solid fa-users-line"></i>
        <a href="" className="dashboard-items">
          <span>Communities</span>
        </a>
      </div>
      <div className="item-row-2">
        <i class="fa-solid fa-gears"></i>
        <a href="" className="dashboard-items">
          <span>Settings</span>
        </a>
        <i class="fa-solid fa-headset"></i>
        <a href="" className="dashboard-items">
          <span>Support</span>
        </a>
        <i class="fa-solid fa-shield-halved"></i>
        <a href="" className="dashboard-items">
          <span>Privacy</span>
        </a>
      </div>
    </div>
  );
}

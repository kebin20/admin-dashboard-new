import React from 'react';
import './Sidebar.css';

export default function SideBar() {
  return (
    <div className="sidebar">
      <div className="title">
        <img
          src="https://cdn-icons-png.flaticon.com/512/4725/4725681.png"
          alt="dashboard"
          width="50"
        />
        <h2>Dashboard</h2>
      </div>
      
      <div className="item-row-1">
        
        <a href="" className="dashboard-items">
        <i class="fa-solid fa-house"></i><span>Home</span>
        </a>

        
        <a href="" className="dashboard-items">
        <i class="fa-solid fa-id-card"></i><span>Profile</span>
        </a>
        
        <a href="" className="dashboard-items">
        <i class="fa-regular fa-message"></i><span>Messages</span>
        </a>

        
        <a href="" className="dashboard-items">
        <i class="fa-solid fa-clock-rotate-left"></i><span>History</span>
        </a>
        
        <a href="" className="dashboard-items">
        <i class="fa-solid fa-list-check"></i><span>Tasks</span>
        </a>

        
        <a href="" className="dashboard-items">
        <i class="fa-solid fa-users-line"></i><span>Communities</span>
        </a>
      </div>

      <div className="item-row-2">
        
        <a href="" className="dashboard-items">
        <i class="fa-solid fa-gears"></i><span>Settings</span>
        </a>
        
        <a href="" className="dashboard-items">
        <i class="fa-solid fa-headset"></i><span>Support</span>
        </a>
        
        <a href="" className="dashboard-items">
        <i class="fa-solid fa-shield-halved"></i><span>Privacy</span>
        </a>

      </div>
    </div>
  );
}

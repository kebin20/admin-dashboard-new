import React from 'react';

export default function Trending() {
  return (
    <div className="trending-users">
      <div className="user">
        <img
          src="https://cdn-icons-png.flaticon.com/512/706/706816.png"
          width="40"
        />
        <div className="trending-user-profile">
          <p className="trending-handle-name">@tegan</p>
          <p className="trending-project-name">World Peace Builder</p>
        </div>
      </div>
      <div className="user">
        <img
          src="https://cdn-icons-png.flaticon.com/512/4323/4323004.png"
          width="40"
        />
        <div className="trending-user-profile">
          <p className="trending-handle-name">@morgan</p>
          <p className="trending-project-name">Super Cool Project</p>
        </div>
      </div>
      <div className="user">
        <img
          src="https://cdn-icons-png.flaticon.com/512/3940/3940417.png"
          width="40"
        />
        <div className="trending-user-profile">
          <p className="trending-handle-name">@kendall</p>
          <p className="trending-project-name">Life Changing App</p>
        </div>
      </div>
      <div className="user">
        <img
          src="https://cdn-icons-png.flaticon.com/512/145/145843.png"
          width="40"
        />
        <div className="trending-user-profile">
          <p className="trending-handle-name">@alex</p>
          <p className="trending-project-name">No Traffic Maker</p>
        </div>
      </div>
    </div>
  );
}

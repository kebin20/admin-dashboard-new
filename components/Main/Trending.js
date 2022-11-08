import React from "react"

export default function Trending() {
  return (
    <div className="trending-users">
      <div className="user">
            <img src="https://cdn-icons-png.flaticon.com/512/706/706816.png" width="40"/>
            <p>@tegan</p>
            <p>World Peace Builder</p>
      </div>
      <div className="user">
            <img src="https://cdn-icons-png.flaticon.com/512/4323/4323004.png" width="40"/>
            <p>@morgan</p>
            <p>Super Cool Project</p>
      </div>
      <div className="user">
            <img src="https://cdn-icons-png.flaticon.com/512/3940/3940417.png" width="40"/>
            <p>@kendall</p>
            <p>Life Changing App</p>
      </div>
      <div className="user">
            <img src="https://cdn-icons-png.flaticon.com/512/145/145843.png" width="40"/>
            <p>@alex</p>
            <p>No Traffic Maker</p>
      </div>
    </div>
  )
}
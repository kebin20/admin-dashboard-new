import React from 'react';
import Card from "./Card"
import Announcements from './Announcements';
import Trending from './Trending';
import Data from './Data';
import "./Main.css"

export default function Main() {
  const cards = Data.map(project => {
    return (
      <Card
        {...project}
      />
    )
  })
  
  return (
    <div className="main">
      <h3 className="project-header-title">Your Projects</h3>
      <div className="cards">
        {cards}
      </div>
      <div className="AT">
        <h3>Announcements</h3>
        <Announcements />
        <h3>Trending</h3>
        <Trending />
      </div>
    </div>
  );
}

import React from 'react';

export default function Card(props) {
  return (
    <div className="project-card">
      <h4>{props.projectName}</h4>
      <p>{props.projectContent}</p>
      <div className="project-button-row">
        <button className="add">
          <i class="fa-solid fa-star"></i>
        </button>
        <button className="watch">
          <i class="fa-regular fa-eye"></i>
        </button>
        <button className="share">
          <i class="fa-solid fa-share-nodes"></i>
        </button>
      </div>
    </div>
  );
}

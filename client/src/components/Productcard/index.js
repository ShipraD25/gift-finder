import React from "react";

import "./style.css";

function Productcard(props) {
  return (
    <div className="card">
      <i className="fas fa-bookmark" onClick={() => props.handleBookmark(props.id)}></i>
      <div className="img-container">
        <img src={props.image} alt={props.id}
          onClick={() => props.handleBtnClick(props.id)} />
          </div>
          <div className="info">
        <p className="info-title">
        <span><a href={props.url} >{props.title}...</a></span>
        </p>
        <span className="price">{props.price}</span>
      </div>
        </div>
  );
}

export default Productcard;
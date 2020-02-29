import React from "react";

import "./style.css";

function Productcard(props) {
  return (
    <div className="card">
      <div className="img-container">
        <img src={props.image} alt={props.id}
          onClick={() => props.handleBtnClick(props.id)} />
      </div>
      <div className="info">
        <h3 className="info-title">
          <a href={props.url} >{props.title}</a>
        </h3>
        <div className="info-price">
          <span className="">{props.price}</span>
        </div>
      </div>
    </div>
  );
}

export default Productcard;
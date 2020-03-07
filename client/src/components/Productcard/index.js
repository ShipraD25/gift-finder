import React from "react";

import "./style.css";

function showIcon(props) {
  console.log(props)
  if (props.page_type === "homepage") {
      return <i className="fas fa-bookmark" onClick={() => props.handleBookmark(props.id)}></i>
  } else {
      return <i className="fa fa-trash" aria-hidden="true" onClick={() => props.handleDelete(props.id)}></i>
  }
}

function Productcard(props) {
  return (
    <div className="card">
      {showIcon(props)}
      {/* <i className="fas fa-bookmark" onClick={() => props.handleBookmark(props.id)}></i> */}
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
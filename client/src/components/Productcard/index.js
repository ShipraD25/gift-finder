import React from "react";

import "./style.css";

function showIcon(props) {
  console.log(props)
  if (props.page_type === "homepage") {
    return <i className="far fa-bookmark fa-lg circle-icon" onClick={() => props.handleBookmark(props.id)}></i>
  } else {
    return <i className="fa fa-trash fa-lg circle-icon" aria-hidden="true" onClick={() => props.handleDelete(props.id)}></i>
  }
}

function Productcard(props) {
  return (
    <div className="card">
      <div className="img-container">
        {showIcon(props)}
        <img src={props.image} alt={props.id}
          onClick={() => props.handleBtnClick(props.id)} />
      </div>
      <div className="info">
        <p className="info-title">
          <span><a href={props.url} >{props.title}...</a></span>
        </p>
        <span className="price">${props.price}</span>
      </div>
    </div>
  );
}

export default Productcard;
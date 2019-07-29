import React from "react";

const Card = props => (
  <div className="card">
    <div
      className="img-div"
      style={{ backgroundImage: `url(${props.data.img})` }}
    />
    <p>{props.data.desc}</p>
  </div>
);

export default Card;

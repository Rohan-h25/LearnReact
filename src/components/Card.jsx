import React from "react";
import Avatar from "./Avatar";
import Details from "./Details";

function Card(props) {
  return (
    <div className="card">
      <div className="top">
        <Details detailsInfo = {props.id} />
        <h2 className="name">{props.name}</h2>
        <Avatar
          img = {props.img}
        />
      </div>
      <div className="bottom">
        <Details detailsInfo = {props.tel} />
        <Details detailsInfo = {props.email} />
      </div>
    </div>
  );
}

export default Card;

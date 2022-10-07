import React from "react";
import "./commentSection.css";

const userComment = ({ currentComment }) => {
  return (
    <div className="comment">
      <div className="user">
        <img className="picture" src={currentComment.picture} alt="" />
        <h1>{currentComment.name}</h1>
      </div>
      <p>{currentComment.comment}</p>
    </div>
  );
};

export default userComment;

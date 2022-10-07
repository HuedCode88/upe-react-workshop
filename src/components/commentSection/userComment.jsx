import React from "react";
import "./commentSection.css";

const userComment = () => {
  return (
    // Replace the img src, the h1 and the p with the image, name, and comment from the object
    // Hint: You will need to pass a prop of the commentList's current item
    <div className="comment">
      <div className="user">
        <img className="picture" src="" alt="" />
        <h1>replace this with the username</h1>
      </div>
      <p>replace this with the comment</p>
    </div>
  );
};

export default userComment;

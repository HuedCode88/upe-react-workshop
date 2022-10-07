import React from "react";
import "./post.css";
import Comment from "@mui/icons-material/Comment";
import { Link } from "react-router-dom";

const post = ({ image, name, description, profile, id }) => {
  return (
    <div className="post">
      <div className="topContainer">
        <img className="pfp" src={profile.userImage} alt="user profile picture" />
        <h3 className="name">{name}</h3>
      </div>
      <img className="image" src={image} alt={description} />
      <p className="description">{description}</p>
      <div className="iconContainer">
        <Link to={`comments/${id}`}>
          <Comment />
        </Link>
      </div>
    </div>
  );
};

export default post;

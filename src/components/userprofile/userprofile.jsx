import React from "react";
import "./userprofile.css";
import { Favorite, Person } from "@mui/icons-material";

const userprofile = ({ userImage, name, username, bio, showForm, setShowForm }) => {
  const handleShowForm = () => {
    setShowForm(!showForm);
  };

  return (
    <div className="sidebar">
      <div className="basicInfo">
        <div className="circle">
          <img className="userImage" src={userImage} alt={username} />
        </div>
        <div className="names">
          <h1 className="fullName">{name}</h1>
          <h4 className="username">{`@${username}`}</h4>
        </div>
      </div>
      <div className="followsCount">
        <Person /> 200 <Favorite /> 300
      </div>
      <p className="bio">{bio}</p>
      <button className="newPostButton" onClick={handleShowForm}>
        New Post
      </button>
    </div>
  );
};

export default userprofile;

import React from "react";
import { useParams, Link } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import UserComment from "./userComment";
import "./commentSection.css";

const commentSection = ({ comments }) => {
  const { id } = useParams();
  const commentList = comments[id];

  return (
    <div className="commentSection">
      <div className="commentFeed">
        {/* Write Code Here */}
        {/* Hint: Uncomment the line below. See the output in the console. Use commentList to display the output on the screen! */}
        {/* {console.log(commentList)} */}
      </div>
      <Link to="/">
        <button className="backBtn">{<ArrowBackIcon />}</button>
      </Link>
    </div>
  );
};

export default commentSection;

import { useState } from "react";
import "./modal.css";
import { styled } from "@mui/material/styles";
import TextField from "@mui/material/TextField";

const modal = ({ posts, setPosts, setShowForm }) => {
  const [imgUrl, setImgUrl] = useState("");
  const [desc, setDesc] = useState("");

  const handleSetPost = (e) => {
    e.preventDefault();
    let newPost = {
      image: imgUrl,
      name: "Carlos Chavez",
      description: desc,
    };
    setPosts([...posts, newPost]);
    setShowForm(false);
  };

  return (
    <div className="formWrapper">
      <form className="form">
        <CssTextField
          label="Image URL"
          id="image-url-outlined-input"
          value={imgUrl}
          onChange={(e) => setImgUrl(e.target.value)}
        />
        <CssTextField
          label="Description"
          id="description-outlined-input"
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
        />
        <input className="submitPostButton" type="submit" value="Submit" onClick={(e) => handleSetPost(e)} />
      </form>
    </div>
  );
};

const CssTextField = styled(TextField)({
  "& label.Mui-focused": {
    color: "white",
  },
  "& label": {
    color: "white",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "white",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "white",
    },
    "&:hover fieldset": {
      borderColor: "white",
    },
    "&.Mui-focused fieldset": {
      borderColor: "white",
    },
    input: {
      color: "#ffffff",
    },
    width: "50vw",
  },
});

export default modal;

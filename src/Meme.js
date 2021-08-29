import React from "react";
import "./Meme.css";
import { useDispatch } from "react-redux";

function Meme({ id, imageURL, topText, bottomText }) {
  const dispatch = useDispatch();
  const handleClick = (id) => {
    dispatch({ type: "removeMeme", payload: { id } });
  };
  return (
    <div className="Meme" id={id}>
      <div className="imageContainer">
        <img src={imageURL} alt="user supplied meme"></img>
        <div className="topText">{topText}</div>
        <div className="bottomText">{bottomText}</div>
      </div>
      <button type="button" onClick={() => handleClick(id)}>
        Remove
      </button>
    </div>
  );
}

export default Meme;

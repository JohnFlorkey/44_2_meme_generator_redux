import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuid } from "uuid";
import "./MemeForm.css";

function MemeForm() {
  const dispatch = useDispatch();
  const formData = useSelector((store) => store.formData);

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    dispatch({ type: "formChange", payload: { name, value } });
  };
  const handleSubmit = (evt) => {
    evt.preventDefault();
    dispatch({ type: "addMeme", payload: { ...formData, id: uuid() } });
    dispatch({ type: "formClear" });
  };
  return (
    <div className="MemeForm">
      <form onSubmit={handleSubmit}>
        <label htmlFor="imageURL">Image URL</label>
        <input
          type="url"
          name="imageURL"
          id="imageURL"
          className="MemeForm-input"
          value={formData.imageURL}
          onChange={handleChange}
        />
        <label htmlFor="topText">Top Text</label>
        <input
          type="text"
          name="topText"
          id="topText"
          className="MemeForm-input"
          value={formData.topText}
          onChange={handleChange}
        />
        <label htmlFor="bottomText">Bottom Text</label>
        <input
          type="text"
          name="bottomText"
          id="bottomText"
          className="MemeForm-input"
          value={formData.bottomText}
          onChange={handleChange}
        />
        <button type="submit">Create Meme</button>
      </form>
    </div>
  );
}

export default MemeForm;

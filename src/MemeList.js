import React from "react";
import { useSelector } from "react-redux";
import Meme from "./Meme";

function MemeList() {
  const memeList = useSelector((store) => store.memeList);

  return (
    <div className="MemeList">
      {memeList.map((m) => (
        <Meme
          key={m.id}
          id={m.id}
          imageURL={m.imageURL}
          topText={m.topText}
          bottomText={m.bottomText}
        />
      ))}
    </div>
  );
}

export default MemeList;

import React from "react";
import Emojipic from "./emojipic";
import Meaning from "./meaning";

function Entry(props) {
  return (
    <div className="term">
      <dt>
        <Emojipic emoji={props.emoji} />
        <span>{props.name}</span>
      </dt>
      <Meaning meaning={props.meaning} />
    </div>
  );
}

export default Entry;

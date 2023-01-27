import React from "react";

function Town({ name, tindex }) {
  return (
    <li>
      <h5 id={"town" + (tindex + 1)}>{name}</h5>
    </li>
  );
}

export default Town;

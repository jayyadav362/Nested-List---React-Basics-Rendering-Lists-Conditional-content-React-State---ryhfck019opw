import React, { useState } from "react";
import Town from "./Town";

function City({ name, towns, cindex }) {
  const [clicked, setClicked] = useState(false);
  return (
    <li>
      <h4 id={"city" + (cindex + 1)} onClick={() => setClicked(!clicked)}>
        {name}
      </h4>
      {clicked ? (
        <ul>
          {towns.map((item,tindex) => (
            <Town key={tindex} name={item.name} tindex={tindex} />
          ))}
        </ul>
      ) : null}
    </li>
  );
}

export default City;

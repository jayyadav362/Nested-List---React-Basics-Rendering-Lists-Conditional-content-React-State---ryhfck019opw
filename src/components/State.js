import React, { useState } from "react";
import City from "./City";
function State({ name, cities, sindex }) {
  const [clicked, setClicked] = useState(false);
  function handleClick() {
    setClicked(!clicked);
  }

  return (
    <li>
      <h3 id={"state" + (sindex + 1)} onClick={handleClick}>
        {name}
      </h3>
      {clicked ? (
        <ul>
          {cities.map((item,cindex) => (
            <City 
              key={cindex}
              name={item.name}
              towns={item.towns}
              cindex={cindex}
            />
          ))}
        </ul>
      ) : null}
    </li>
  );
}
export default State;

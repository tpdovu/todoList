import React, { useState } from "react";

function ListItem(props) {
  const [clickedOn, setClickedOn] = useState(false);

  function handleClick() {
    setClickedOn((prevValue) => {
      return !prevValue;
    });
  }

  return (
    <div>
      <li
        onClick={handleClick}
        style={{ textDecoration: clickedOn ? "line-through" : "none" }}
      >
        {props.item}
        <button
          onClick={() => {
            props.delete(props.id);
          }}
          style={{ float: "right" }}
        >
          <span>Del</span>
        </button>
      </li>
    </div>
  );
}

export default ListItem;

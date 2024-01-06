import React from "react";
import "../css/BookPro.css";

const Image = (props) => {
  return (
    <>
      <p>
        <img src={props.url} alt="Atomic Habits" className="picture" />
      </p>
    </>
  );
};

export default Image;

import React from "react";

const Author = (props) => {
  const authorColorStyle = {
    color: "blue",
  };
  return (
    <>
      <h2 className="author" style={authorColorStyle}>
        {props.author}
      </h2>
    </>
  );
};

export default Author;

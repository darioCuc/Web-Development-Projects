import React, { useState } from "react";

function App() {
  const [headingText, setHeadingText] = useState("Hello");

   const [isHovered, setIsHovered] = useState(false);

  function handleClick() {
    setHeadingText("Submitted");
  }

  const handleMouseOver = () => {
    setIsHovered(true);
  };

  const handleMouseOut = () => {
    setIsHovered(false);
  };

  return (
    <div className="container">
      <h1>{headingText}</h1>
      <input type="text" placeholder="What's your name?" />
      <button
        style={ {backgroundColor: isHovered ? "black" : null}}
        onClick={handleClick}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      >
        Submit
      </button>
    </div>
  );
}

export default App;

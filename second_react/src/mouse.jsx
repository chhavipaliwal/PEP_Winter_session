// Build a component that changes its background color when hovered over using mouse events
// (onMouseEnter and onMouseLeave).
import { useState } from "react";
import React from "react";
function Mouse() {
  const [color, setColor] = React.useState("white");
  return (
    <div
      style={{ backgroundColor: color }}
      onMouseEnter={() => setColor("yellow")}
      onMouseLeave={() => setColor("white")}
    >
      Hover over me!
    </div>
  );
}
export default Mouse;

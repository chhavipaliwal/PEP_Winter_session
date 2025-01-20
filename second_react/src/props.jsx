import React from "react";
function Sports() {
  const Game = () => {
    return alert("I like cricket");
  };
  return (
    <button className="border m-10 p-4 rounded-xl bg-gray-300" onClick={Game}>
      Click here
    </button>
  );
}
export default Sports;

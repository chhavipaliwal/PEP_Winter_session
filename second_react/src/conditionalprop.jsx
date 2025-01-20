// •Develop a component called StatusMessage that takes a prop named status. Render different
// messages based on whether the status is "success", "error", or "loading".
// function StatusMessage(props) {
//   const { status } = props;
//   if (status === "success") {
//     return <h1>Success</h1>;
//   } else if (status === "error") {
//     return <h1>Error</h1>;
//   } else if (status === "loading") {
//     return <h1>Loading</h1>;
//   }
//   return null; // Return nothing if the status doesn't match
// }
// export default StatusMessage;
import React, { useState } from "react";

function StatusMessage() {
  const [status, setStatus] = useState("loading"); // Initial status

  return (
    <div className="bg-gray-200 p-4 rounded-md text-center">
      <h1>Status Message Example</h1>

      {/* Render the current status */}
      {status === "success" && (
        <h1 className=" mr-4 text-green-500">Success</h1>
      )}
      {status === "error" && <h1 className=" mr-4 text-red-500">Error</h1>}
      {status === "loading" && <h1 className="text-yellow-500">Loading</h1>}

      {/* Buttons to change the status */}
      <div style={{ marginTop: "20px" }}>
        <button className=" mr-4 " onClick={() => setStatus("success")}>
          Set to Success
        </button>
        <button className=" mr-4 " onClick={() => setStatus("error")}>
          Set to Error
        </button>
        <button className=" mr-4 " onClick={() => setStatus("loading")}>
          {" "}
          Set to loading
        </button>
      </div>
    </div>
  );
}

export default StatusMessage;

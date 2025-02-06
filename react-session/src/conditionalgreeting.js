import React from "react";

const ConditionalGreeting = () => {
  const isLoggedIn = false;
  return (
    <div>
      {/* {isLoggedIn ? <h1>Welcome User</h1> : <h1>Please Log in</h1>} */}
      {isLoggedIn && <h1>Welcome User</h1>}
      {!isLoggedIn && <h1>Please Log in</h1>}
    </div>
  );
};

export default ConditionalGreeting;

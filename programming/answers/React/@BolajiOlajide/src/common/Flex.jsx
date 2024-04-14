import React from 'react';


function Flex({ children, direction = "row" }) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        margin: "1rem",
        flexDirection: direction
      }}
    >
      {children}
    </div>
  );
}

export default Flex;

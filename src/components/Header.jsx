import React from "react";

export const Header = () => {
  return (
    <header
      style={{
        backgroundColor: "#23856D",
        width: "100vw",
        minHeight: "58px",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        columnGap: "6rem",
        rowGap: "1rem",
        flexWrap: "wrap",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          columnGap: "2rem",
        }}
      >
        <div>(225) 555-0118</div>
        <div>michelle.rivera@example.com</div>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          columnGap: "3rem",
        }}
      >
        <div
          style={{
            fontWeight: "bold",
          }}
        >
          Follow Us and get a chance to win 80% off
        </div>
        <div>Follow Us : </div>
      </div>
    </header>
  );
};

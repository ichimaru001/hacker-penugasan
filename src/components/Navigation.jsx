import React from "react";

export const Navigation = () => {
  return (
    <nav
      style={{
        backgroundColor: "#ffffffff",
        width: "100vw",
        minHeight: "96px",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        columnGap: "6rem",
        // rowGap: "1rem",
        flexWrap: "wrap",
      }}
    >
      <h1 style={{ color: "#252B42" }}>Bookstar</h1>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          columnGap: "1rem",
          flexWrap: "wrap",
        }}
      >
        <button className="navigation-button">Home</button>
        <button className="navigation-button">Shop</button>
        <button className="navigation-button">About</button>
        <button className="navigation-button">Blog</button>
        <button className="navigation-button">Contact</button>
        <button className="navigation-button">Pages</button>
      </div>
      <div>
        <button className="login-register-button">Login / Register</button>
      </div>
    </nav>
  );
};

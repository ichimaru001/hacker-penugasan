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
        justifyContent: "space-around",
        // padding: "0rem 5vw",
        alignItems: "center",
        columnGap: "2rem",
        flexWrap: "wrap",
      }}
    >
      <h1 style={{ color: "#252B42", marginLeft: "1vw" }}>Bookstar</h1>
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
      <div
        className="user-actions"
        style={{
          marginRight: "1vw",
        }}
      >
        <button className="login-register-button">Login / Register</button>
      </div>
    </nav>
  );
};

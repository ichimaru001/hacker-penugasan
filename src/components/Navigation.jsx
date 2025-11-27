import React from "react";

import userVector from "../assets/vectors/Vector.svg";
import searchVector from "../assets/vectors/Vector-1.svg";
import cartVector from "../assets/vectors/Vector-2.svg";
import heartVector from "../assets/vectors/Vector-3.svg";
import expandVector from "../assets/vectors/Vector-9.svg";

export const Navigation = () => {
  return (
    <nav
      style={{
        backgroundColor: "#ffffffff",
        // maxWidth: "100vw",
        width: "100vw",
        minHeight: "96px",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        // alignItems: "center",
        columnGap: "1rem",
        rowGap: "1.6rem",
        flexWrap: "wrap",
      }}
    >
      <h1 style={{ color: "#252B42", margin: "0" }}>Bookstar</h1>
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
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            columnGap: "0.4rem",
            flexWrap: "wrap",
          }}
        >
          <button
            className="navigation-button"
            style={{
              color: "#252B42",
            }}
          >
            Shop
          </button>
          <img src={expandVector} alt="" />
        </div>
        <button className="navigation-button">About</button>
        <button className="navigation-button">Blog</button>
        <button className="navigation-button">Contact</button>
        <button className="navigation-button">Pages</button>
      </div>
      <div
        className="user-actions"
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          columnGap: "1.6rem",
        }}
      >
        <div>
          <img src={userVector} alt="" />
          <button className="login-register-button">Login / Register</button>
        </div>
        <img src={searchVector} alt="" />
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            columnGap: "0.2rem",
            fontSize: "0.9rem",
            color: "#23A6F0",
          }}
        >
          <img src={cartVector} alt="" />
          <span>1</span>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            columnGap: "0.2rem",
            fontSize: "0.9rem",
            color: "#23A6F0",
          }}
        >
          <img src={heartVector} alt="" />
          <span>1</span>
        </div>
      </div>
    </nav>
  );
};

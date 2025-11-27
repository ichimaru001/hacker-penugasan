import React from "react";

export const SmallNavigation = () => {
  return (
    <section
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          width: "940px",
          height: "92px",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          columnGap: "1rem",
          fontSize: "1.2rem",
        }}
      >
        <span
          className="hierarchy-small-nav"
          style={{
            color: "#252B42",
          }}
        >
          <b>Home</b>
        </span>
        <span className="hierarchy-small-nav">&gt;</span>
        <span className="hierarchy-small-nav">Shop</span>
      </div>
    </section>
  );
};

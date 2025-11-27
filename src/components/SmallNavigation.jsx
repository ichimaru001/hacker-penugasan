import React from "react";

export const SmallNavigation = () => {
  return (
    <section>
      <div
        style={{
          position: "relative",
          left: "26vw",
          width: "100vw",
          height: "92px",
          display: "flex",
          flexDirection: "row",
          // justifyContent: "center",
          // margin: "0rem 9rem",
          alignItems: "center",
          columnGap: "1rem",
          flexWrap: "wrap",
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
    </section> // breadcrumb navigation
  );
};

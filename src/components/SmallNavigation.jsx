import React from "react";

export const SmallNavigation = () => {
  return (
    <section
      style={{
        width: "100vw",
        minHeight: "92px",
        display: "flex",
        flexDirection: "row",
        // justifyContent: "center",
        margin: "0rem 9rem",
        alignItems: "center",
        columnGap: "1rem",
        flexWrap: "wrap",
      }}
    >
      <span className="hierarchy-small-nav">Home</span>
      <span className="hierarchy-small-nav">&gt;</span>
      <span className="hierarchy-small-nav">Shop</span>
    </section> // breadcrumb navigation
  );
};

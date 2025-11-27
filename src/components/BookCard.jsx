import React from "react";
import productCover5 from "../assets/product-cover-5.png";

const BookCard = () => {
  return (
    <article
      style={{
        width: "239px",
        height: "438px",
        display: "flex",
        flexDirection: "column",
        // justifyContent: "flex-start",
        alignItems: "center",
        columnGap: "0rem",
        // flexWrap: "wrap",
        backgroundColor: "#FFFFFF",
      }}
    >
      <img
        src={productCover5}
        alt=""
        style={{
          width: "239px",
          height: "280px",
        }}
      />
      <div
        style={{
          width: "239px",
          height: "158px",
        }}
      >
        <h3
          style={{
            margin: "0",
            marginTop: "1.4rem",
            marginLeft: "1rem",
            color: "#252B42",
          }}
        >
          Graphic Design
        </h3>
        <p
          style={{
            margin: "0",
            marginTop: "0.4rem",
            fontWeight: "500",
            marginLeft: "1rem",
          }}
        >
          Business
        </p>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-start",
            alignItems: "center",
            columnGap: "1rem",
            flexWrap: "wrap",
            margin: "0",
            padding: "0rem 0.4rem",
            fontWeight: "600",
            marginLeft: "1rem",
          }}
        >
          <span>$16.4</span>
          <p
            style={{
              color: "#23856D",
            }}
          >
            $6.4
          </p>
        </div>
      </div>
    </article>
  );
};

export default BookCard;

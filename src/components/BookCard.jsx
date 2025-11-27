import React from "react";
import productCover5 from "../assets/product-cover-5.png";

const BookCard = ({ title, genre, initialPrice, finalPrice, cover }) => {
  return (
    <article
      style={{
        width: "239px",
        height: "438px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        columnGap: "0rem",
        backgroundColor: "#FFFFFF",
      }}
    >
      <img
        src={cover}
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
          {title}
        </h3>
        <p
          style={{
            margin: "0",
            marginTop: "0.4rem",
            fontWeight: "500",
            marginLeft: "1rem",
          }}
        >
          {genre}
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
          <span>${initialPrice}</span>
          <p
            style={{
              color: "#23856D",
            }}
          >
            ${finalPrice}
          </p>
        </div>
      </div>
    </article>
  );
};

export default BookCard;

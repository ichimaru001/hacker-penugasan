import React from "react";
import productCover5 from "../assets/product-cover-5.png";
import BookCard from "./BookCard";

export const ReadingList = () => {
  return (
    <section>
      <h2
        style={{
          position: "relative",
          left: "23vw",
          margin: "0 0 18px 25vw",
          // marginLeft: "25vw",
          color: "#252B42",
          fontSize: "2rem",
          fontWeight: "600",
        }}
      >
        Your Reading List
      </h2>
      <hr
        style={{
          display: "absolute",
          backgroundColor: "#ECECEC",
          height: "2px",
          width: "1050px",
          border: "none",
          // margin: "20px 0 26px 0",
        }}
      ></hr>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          columnGap: "2rem",
          marginTop: "20px",
        }}
      >
        <BookCard></BookCard>
        <BookCard></BookCard>
        <BookCard></BookCard>
        <BookCard></BookCard>
      </div>
    </section>
  );
};

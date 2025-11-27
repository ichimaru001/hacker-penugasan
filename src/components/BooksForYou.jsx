import React from "react";
import BookCard from "./BookCard";

export const BooksForYou = () => {
  return (
    <section
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: "3rem",
      }}
    >
      <div
        style={{
          width: "1050px",
          // height
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "flex-start",
        }}
      >
        <h2
          style={{
            // position: "relative",
            // left: "2rem",
            // JustifyContent: "flex-start",
            // margin: "0 vw 0 0",
            // marginLeft: "25vw",
            color: "#252B42",
            fontSize: "2rem",
            fontWeight: "600",
            marginBottom: "0.6rem",
          }}
        >
          Books For You
        </h2>
      </div>
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
          maxWidth: "1200px",
          gridTemplateColumns: "1fr 1fr 1fr 1fr",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          columnGap: "2rem",
          marginTop: "20px",
          flexWrap: "wrap",
        }}
      >
        <BookCard></BookCard>
        <BookCard></BookCard>
        <BookCard></BookCard>
        <BookCard></BookCard>
        <BookCard></BookCard>
        <BookCard></BookCard>
        <BookCard></BookCard>
        <BookCard></BookCard>
      </div>
    </section>
  );
};

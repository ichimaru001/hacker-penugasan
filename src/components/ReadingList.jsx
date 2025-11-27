import React from "react";
import productCover5 from "../assets/product-cover-5.png";
import productCover4 from "../assets/product-cover-5(1).png";
import productCover3 from "../assets/product-cover-5(2).png";
import productCover2 from "../assets/product-cover-5(3).png";
import BookCard from "./BookCard";

export const ReadingList = () => {
  return (
    <section
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: "2rem",
      }}
    >
      <div
        style={{
          width: "1050px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "flex-start",
        }}
      >
        <h2
          style={{
            color: "#252B42",
            fontSize: "2rem",
            fontWeight: "600",
            marginTop: "0",
            marginBottom: "0.6rem",
          }}
        >
          Your Reading List
        </h2>
      </div>
      <hr
        style={{
          display: "absolute",
          backgroundColor: "#ECECEC",
          height: "2px",
          width: "1050px",
          border: "none",
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
        }}
      >
        <BookCard
          title={"Graphic Design"}
          genre={"Business"}
          initialPrice={"16.4"}
          finalPrice={"6.4"}
          cover={productCover5}
        ></BookCard>
        <BookCard
          title={"User Experience"}
          genre={"Engineering"}
          initialPrice={"16.4"}
          finalPrice={"6.4"}
          cover={productCover4}
        ></BookCard>
        <BookCard
          title={"My Little Star"}
          genre={"Fantasy"}
          initialPrice={"16.4"}
          finalPrice={"6.4"}
          cover={productCover3}
        ></BookCard>
        <BookCard
          title={"Think Different"}
          genre={"Self Improvement"}
          initialPrice={"16.4"}
          finalPrice={"6.8"}
          cover={productCover2}
        ></BookCard>
      </div>
    </section>
  );
};

import React from "react";
import carouselImage from "../assets/carousel-inner.png";

import heartVector from "../assets/vectors/Vector-7.svg";
import cartVector from "../assets/vectors/Vector-8.svg";
import watchVector from "../assets/vectors/Vector.png";
import leftVector from "../assets/vectors/Vector-10.svg";
import rightVector from "../assets/vectors/Vector-11.svg";

export const CurrentProduct = () => {
  return (
    <section
      style={{
        minHeight: "598px",
        width: "100vw",
        display: "flex",
        justifyContent: "center",
        // flexWrap: "wrap",
        marginBottom: "3rem",
      }}
    >
      <div
        className="current-product-div"
        style={{
          // maxWidth: "1050px",
          minWidth: "506px",
          minHeight: "475px",
          display: "flex",
          // flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          columnGap: "1rem",
          // flexWrap: "wrap",
        }}
      >
        <figure style={{ position: "relative" }}>
          <img src={carouselImage} alt=""></img>
          <div
            style={{
              position: "absolute",
              height: "100%",
              width: "100%",
              top: "0",
              bottom: "0",
              left: "0",
              right: "0",
            }}
          >
            <img
              src={leftVector}
              alt=""
              style={{ position: "absolute", left: "2rem", top: "14rem" }}
            />
            <img
              src={rightVector}
              alt=""
              style={{ position: "absolute", right: "2rem", top: "13.7rem" }}
            />
          </div>
        </figure>
        <article
          style={{
            width: "506px",
            height: "475px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            flexWrap: "wrap",
          }}
        >
          <div className="CurrentProduct-book-tag-div">
            <span className="CurrentProduct-book-tag">Self Improvement</span>
            <span className="CurrentProduct-book-tag">Technology</span>
          </div>
          <div>
            <h2
              style={{
                color: "#252B42",
                fontSize: "2.4rem",
                margin: "0",
                marginTop: "1.4rem",
              }}
            >
              Beyond the Stars
            </h2>
            <h3
              style={{
                color: "#252B42",
                fontSize: "1.8rem",
                margin: "0",
              }}
            >
              $1,139.33
            </h3>
            <p>
              <b>Availability :</b>{" "}
              <span
                style={{
                  color: "#23A6F0",
                  fontWeight: "500",
                }}
              >
                In Stock
              </span>
            </p>
            <p
              style={{
                wordWrap: "break-word",
                margin: "0",
              }}
            >
              Met minim Mollie non desert Alamo est sit cliquey dolor do met
              sent. RELIT official consequent door ENIM RELIT Mollie. Excitation
              venial consequent sent nostrum met. Author:Marcus pson
            </p>
            <div
              style={{
                marginTop: "0.9rem",
              }}
            >
              <p className="CurrentProduct-book-details">
                <b>Pages:</b> 328
              </p>
              <p className="CurrentProduct-book-details">
                <b>Publisher:</b> Noir House Books
              </p>
              <p className="CurrentProduct-book-details">
                <b>ISBN:</b> 978-1-234567-90-6
              </p>
              <p className="CurrentProduct-book-details">
                <b>Published:</b> January 20, 2024
              </p>
            </div>
          </div>
          <div
            style={{
              width: "506px",
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-start",
              columnGap: "1rem",
              flexWrap: "wrap",
              marginTop: "2rem",
            }}
          >
            <div>
              <button
                style={{
                  fontSize: "1rem",
                  fontWeight: "500",
                  width: "96px",
                  height: "44px",
                  backgroundColor: "#007AFF",
                  border: "none",
                  borderRadius: "12px",
                }}
              >
                Buy Now
              </button>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "flex-start",
                columnGap: "1rem",
              }}
            >
              <button
                style={{
                  width: "40px",
                  height: "40px",
                  backgroundColor: "#DBECFF",
                  borderRadius: "100%",
                  border: "none",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img src={heartVector} alt="" />
              </button>
              <button
                style={{
                  width: "40px",
                  height: "40px",
                  backgroundColor: "#DBECFF",
                  borderRadius: "100%",
                  border: "none",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img src={cartVector} alt="" />
              </button>
              <button
                style={{
                  width: "40px",
                  height: "40px",
                  backgroundColor: "#DBECFF",
                  borderRadius: "100%",
                  border: "none",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img src={watchVector} alt="" />
              </button>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
};

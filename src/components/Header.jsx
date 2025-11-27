import React from "react";

import phoneVector from "../assets/vectors/Vector-4.svg";
import instaVector from "../assets/vectors/Vector-6.svg";
import youtubeVector from "../assets/vectors/Vector-5.svg";
import emailVector from "../assets/vectors/mail-01.svg";

export const Header = () => {
  return (
    <header
      style={{
        backgroundColor: "#23856D",
        width: "100vw",
        minHeight: "58px",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        columnGap: "6rem",
        // rowGap: "0rem",
        flexWrap: "wrap",
        color: "#FFFFFF",
        fontSize: "1rem",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          columnGap: "2rem",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            columnGap: "0.4rem",
          }}
        >
          <img
            src={phoneVector}
            alt=""
            style={{
              width: "16px",
              height: "16x",
            }}
          />
          <p>(225) 555-0118</p>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            columnGap: "0.4rem",
          }}
        >
          <img
            src={emailVector}
            alt=""
            style={{
              width: "16px",
              height: "16x",
            }}
          />
          <p>michelle.rivera@example.com</p>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          columnGap: "3rem",
        }}
      >
        <p
          style={{
            fontWeight: "bold",
          }}
        >
          Follow Us and get a chance to win 80% off
        </p>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            columnGap: "0.4rem",
          }}
        >
          <p>Follow Us : </p>
          <img
            src={instaVector}
            alt=""
            style={{
              width: "16px",
              height: "16x",
            }}
          />
          <img
            src={youtubeVector}
            alt=""
            style={{
              width: "16px",
              height: "16x",
            }}
          />
        </div>
      </div>
    </header>
  );
};

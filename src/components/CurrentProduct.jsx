import React from "react";

export const CurrentProduct = () => {
  return (
    <section>
      // showing current product
      <figure>
        // main product image
        <img src="" alt="" /> // product image
        <span></span> // cycle through products
      </figure>
      <article>
        // main product description/buttons
        <div>
          // book tags
          <span></span> // single book tag
        </div>
        <div>
          // main product descriptions
          <h2></h2> // book title
          <h3></h3> // book price
          <p></p> // availability
          <p></p> // book description
          <div>
            // expanded book details
            <p></p> // pages
            <p></p> // publisher
            <p></p> // ISBN
            <p></p> // date published
          </div>
        </div>
        <div>
          // user buttons, buy now, favorite, add to cart
          <div>
            <button></button> // buy now
          </div>
          <div>
            <button></button> // like
            <button></button> // cart
            <button></button> // watch list
          </div>
        </div>
      </article>
    </section>
  );
};

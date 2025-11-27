import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <main>
          <header> // displays phone number, email, social media links
            <div> // phone number, email
              <div></div> // phone number
              <div></div> // email
            </div>
            <div> // offer, social media links
              <div></div> // offer
              <div></div> // social media links
            </div>
          </header>

          <nav> // stores navigation buttons, login/register, cart, favorites
            <div></div> // Bookstar logo
            <div></div> // nav buttons
            <div></div> // login/register, cart, likes
          </nav>

          <section></section> // breadcrumb navigation 

          <section> // showing current product
            <figure> // main product image
              <img src="" alt="" /> // product image
              <span></span> // cycle through products
            </figure>
            <article> // main product description/buttons
              <div> // book tags
                <span></span> // single book tag
              </div>
              <div> // main product descriptions
                <h2></h2> // book title
                <h3></h3> // book price
                <p></p> // availability
                <p></p> // book description
                <div> // expanded book details
                  <p></p> // pages
                  <p></p> // publisher
                  <p></p> // ISBN
                  <p></p> // date published
                </div>
              </div>
              <div> // user buttons, buy now, favorite, add to cart
                <div>
                  <button></button>    // buy now
                </div>
                <div>
                  <button></button> // like
                  <button></button> // cart
                  <button></button> // watch list
                </div>
              </div>
            </article>
          </section>

          <section> // reading list
            <h2></h2> // "Your Reading List" header
            <article> // small  4 total
              <figure> // small product image
                <img src="" alt="" />
              </figure>
              <div>
                <h3></h3> // book title
                <p></p> // book genre
                <div>
                  <span></span> // initial price
                  <p></p> // final price
                </div>
              </div>
            </article>
          </section>
          
          <section> // books for you - two rows
            <h2></h2> // "Books For You" header
            <article> // small  4 total
              <figure></figure> // small product image
              <div>
                <h3></h3> // book title
                <p></p> // book genre
                <div>
                  <span></span> // initial price
                  <p></p> // final price
                </div>
              </div>
            </article>
          </section>

      </main>
    </>
  )
}

export default App

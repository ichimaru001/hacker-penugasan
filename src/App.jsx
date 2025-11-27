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
          </header>
          <nav> // stores navigation buttons, login/register, cart, favorites

          </nav>
          <section> // breadcrumb navigation 

          </section>
          <section> // showing current product
            <figure> // main product image

            </figure>
            <article> // main product description/buttons
              <span> // book tags

              </span>
              <div> // main product descriptions

              </div>
              <div> // user buttons, buy now, favorite, add to cart

              </div>
            </article>
          </section>
          <section> // reading list
            <h2> // "Your Reading List" header

            </h2>
            <article> // small  4 total
              <figure> // small product image

              </figure>
              <div>
                <h3> // book title

                </h3>
                <p> // book genre

                </p>
                <div>
                  <span> // initial price

                  </span>
                  <p> // final price

                  </p>
                </div>
              </div>
            </article>
          </section>
          <section> // books for you - two rows
            <h2> // "Books For You" header

            </h2>
            <article> // small  4 total
              <figure> // small product image

              </figure>
              <div>
                <h3> // book title

                </h3>
                <p> // book genre

                </p>
                <div>
                  <span> // initial price

                  </span>
                  <p> // final price

                  </p>
                </div>
              </div>
            </article>
          </section>
      </main>
    </>
  )
}

export default App

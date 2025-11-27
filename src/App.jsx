import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

import { Header } from "./components/Header";
import { Navigation } from "./components/Navigation";
import { SmallNavigation } from "./components/SmallNavigation";
import { CurrentProduct } from "./components/CurrentProduct";
import { ReadingList } from "./components/ReadingList";
import { BooksForYou } from "./components/BooksForYou";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <main>
        <Header></Header>
        <Navigation></Navigation>
        <SmallNavigation></SmallNavigation>
        <CurrentProduct></CurrentProduct>
        <ReadingList></ReadingList>
        <BooksForYou></BooksForYou>
      </main>
    </>
  );
}

export default App;

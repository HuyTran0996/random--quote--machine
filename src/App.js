import { useState } from "react";
import "./App.scss";

const quoteURL =
  "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json";

function App() {
  const [quote, setQuote] = useState(
    "Life isn’t about getting and having, it’s about giving and being"
  );
  const [author, setAuthor] = useState("Kevin Krusg");
  const [randomNumber, setRandomNumberr] = useState(0);

  const changeQuoteAndAuthor = () => {
    setQuote("Life is what we make it, always has been, always will be");
    setAuthor("Grandma Moses");
  };
  const generateNumber = () => {
    setRandomNumberr(Math.floor(10 * Math.random()));
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Random Number: {randomNumber}</h1>
        <button onClick={generateNumber}>Genarate randomNumber</button>
        <p>"{quote}"</p>
        <p>- {author}</p>
        <button onClick={changeQuoteAndAuthor}>Change Quote</button>
      </header>
    </div>
  );
}

export default App;

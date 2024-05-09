import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useThunk } from "../hook/use-thunk";
import { fetchQuotes } from "../store";
import "./QuoteBox.scss";

import { FaTwitter } from "react-icons/fa6";
import { FaQuoteLeft } from "react-icons/fa";

const QuoteBox = () => {
  const [doFetchQuotes, isLoading, loadingError] = useThunk(fetchQuotes);
  const { data } = useSelector((state) => {
    return state.quotes;
  });

  const [quote, setQuote] = useState("Quote");
  const [author, setAuthor] = useState("Author");
  const [backgroundColor, setBackgroundColor] = useState("#f0f0f0");

  const handleGetRandomQuotes = () => {
    if (data.quotes?.length !== 0) {
      const randomNumber = Math.floor(Math.random() * data.quotes?.length);

      setQuote(data.quotes?.[randomNumber].quote);
      setAuthor(data.quotes?.[randomNumber].author);

      const randomColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(
        Math.random() * 256
      )}, ${Math.floor(Math.random() * 256)})`;
      setBackgroundColor(randomColor);
    }
  };

  useEffect(() => {
    doFetchQuotes();
  }, []);

  // Listen for changes in the data state
  useEffect(() => {
    if (data.quotes && data.quotes.length > 0) {
      handleGetRandomQuotes();
    }
  }, [data]);

  return (
    <div id="quote-box" style={{ backgroundColor }}>
      <div className="quote-text">
        <span id="text" className="quote">
          {isLoading ? (
            "Loading..."
          ) : loadingError ? (
            "Error fetching data.."
          ) : (
            <>
              <FaQuoteLeft className="quote-mark" />
              {quote}
            </>
          )}
        </span>
      </div>

      <div className="quote-author">
        <span id="author">
          -
          {isLoading
            ? "Loading..."
            : loadingError
            ? "Error fetching data.."
            : author}
        </span>
      </div>

      <div className="buttons">
        <a
          id="tweet-quote"
          href={`https://twitter.com/intent/tweet?text=${quote}-${author}&hashtags=quote`}
        >
          <FaTwitter />
        </a>
        <button
          id="new-quote"
          className="quote-btn transition"
          onClick={handleGetRandomQuotes}
        >
          New Quote
        </button>
      </div>
    </div>
  );
};

export default QuoteBox;

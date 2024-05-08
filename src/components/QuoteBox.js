import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchQuotes } from "../store";
const QuoteBox = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchQuotes());
  }, []);
  return <div>QuoteBox</div>;
};

export default QuoteBox;

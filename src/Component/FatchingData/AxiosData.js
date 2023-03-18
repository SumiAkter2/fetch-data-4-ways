import axios from "axios";
import React, { useEffect, useState } from "react";


const AxiosData = () => {
  const [qoute, setQuote] = useState(null);
  useEffect(() => {
    const fetch = async () => {
      const rest = await axios.get(" https://api.quotable.io/random");
      setQuote(rest.data);
    };
    fetch();
  }, []);
  return (
    <div>
      <h1>Use Axios:</h1>
      <p>{qoute?.author}</p>
    </div>
  );
};

export default AxiosData;

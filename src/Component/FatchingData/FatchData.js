import React, { useEffect, useState } from "react";

const FatchData = () => {
  const [quote, setQuote] = useState(null);
  useEffect(() => {
    const fatchData = async () => {
      const rest = await fetch("https://api.quotable.io/random");
      const data = await rest.json();
      setQuote(data);
    };
    fatchData();
  }, []);
  return (
    <div>
      <h1>Use Fatch:</h1>
      <p> content: {quote?.content}</p>
    </div>
  );
};

export default FatchData;

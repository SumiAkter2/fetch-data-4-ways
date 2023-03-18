import React from "react";
import useSWR from "swr";

const SwrData = () => {
  const fetcher = async (...args) => {
    const rest = await fetch(...args);
    const data = await rest.json();
    return data;
  };
  const { data, error } = useSWR("https://api.quotable.io/random", fetcher, {
    suspense: true,
  });
  if (error) {
    return <h1> Occurred Error</h1>;
  }
  return (
    <div>
      <h1> use SWR</h1>
      {data?.content}
    </div>
  );
};

export default SwrData;

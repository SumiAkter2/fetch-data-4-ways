import "./App.css";
import FatchData from "./Component/FatchingData/FatchData";
import AxiosData from "./Component/FatchingData/AxiosData";
import SwrData from "./Component/FatchingData/SwrData";
import { Suspense } from "react";

function App() {
  return (
    <div className="App">
      <FatchData />
      <AxiosData />
      <Suspense fallback={<h1>Loading data....</h1>}>
        {" "}
        <SwrData />
      </Suspense>
    </div>
  );
}

export default App;

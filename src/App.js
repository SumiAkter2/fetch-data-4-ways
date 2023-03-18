import logo from "./logo.svg";
import "./App.css";
import FatchData from "./Component/FatchingData/FatchData";
import AxiosData from "./Component/FatchingData/AxiosData";

function App() {
  return (
    <div className="App">
      <FatchData />
      <AxiosData/>
    </div>
  );
}

export default App;

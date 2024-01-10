import { useOutlet } from "react-router-dom";
import Header from "./Components/Layout/Header";
import Footer from "./Components/Layout/Footer";

function App() {
  return (
    <div className="Layout">
      <div className="flex-grow-0">
        <Header/>
      </div>
      <div className="flex-grow-1">{useOutlet()}</div>
      <div className="flex-grow-0">
      <Footer/>
      </div>
    </div>
  );
}

export default App;

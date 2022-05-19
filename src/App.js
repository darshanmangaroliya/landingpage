import "./App.css";
import Navbar from "./Components/Navbar";
import Form from "./Form";

function App() {
  return (
    <div className="main">
      <div className="header">
        <Navbar />
      </div>
      <div className="middle">
        <div className="left"> image</div>
        <div className="right">
          <Form />
        </div>
      </div>
      <div className="bottom">@ All right reserved</div>
    </div>
  );
}

export default App;

import logo from "./logo.svg";
import "./App.css";
import TopNavbar from "./Components/TopNavBar.js";
import ProductSaleBar from "./Components/ProductSaleBar";

function App() {
  return (
    <div className="container">
      <TopNavbar />
      <ProductSaleBar />
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
      </div>
    </div>
  );
}

export default App;

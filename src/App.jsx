import logo from "./logo.svg";
import "./App.css";
import Nav from "./components/Nav.jsx";
import Welcome from "./components/Welcome.jsx";
import ProductRight from "./components/ProductRight.jsx";

function App() {
  return (
    <>
      <Nav></Nav>
      <Welcome></Welcome>
      <ProductRight></ProductRight>
    </>
  );
}

export default App;

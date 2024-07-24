import logo from "./logo.svg";
import "./App.css";
import Nav from "./components/Nav.jsx";
import Welcome from "./components/Welcome.jsx";
import ProductRight from "./components/ProductRight.jsx";
import ProductLeft from "./components/ProductLeft.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <>
      <Welcome></Welcome>
      <ProductLeft></ProductLeft>
      <ProductRight></ProductRight>
      <Footer></Footer>
    </>
  );
}

export default App;

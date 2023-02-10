import "./App.css";
import NavBar from "./components/NavBar";
import Section from "./components/Section";
import Pizza from "./components/menu/pizza";
import Food from "./components/menu/food";
import Dessert from "./components/menu/dessert";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar></NavBar>
        <div className="routing">
          <Routes>
            <Route path="/" element={""} />
          </Routes>
        </div>
        <div className="mainImg" height={"auto"}>
          <picture>
            <img alt="" src="//pizza4ps.com/img2017/top/img_main.jpg" />
          </picture>
          <div class="textbox">
            <h2 class="text">
              Delivering Wow,
              <br />
              Sharing Happiness
              <br />
            </h2>
          </div>
        </div>
        <Section />
        <div className="menu-section" data-aos="fade-up" >
          <Routes>
            <Route path="/menu/pizza" element={<Pizza />} />
            <Route path="/menu/food" element={<Food />} />
            <Route path="/menu/dessert" element={<Dessert />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;

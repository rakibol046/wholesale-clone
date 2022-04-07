import "./App.css";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import SideMenu from "./components/side-menu/SideMenu";

function App() {
  return (
    <>
      <Header />
      <SideMenu />
      <div className="mainContainer">
        <div className="content mobileRadius">
          <Home />
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;

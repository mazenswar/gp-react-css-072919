import React from "react";
// Components
import Nav from "../Components/Nav";
import About from "../Components/About";
import CardsContainer from "./CardsContainer";
import Footer from "../Components/Footer";

// Stylesheets
import "../Stylesheets/home.scss";

class Home extends React.Component {
  render() {
    return (
      <div className="main-container">
        <Nav />
        <About />
        <CardsContainer />
        <Footer />
      </div>
    );
  }
}

export default Home;

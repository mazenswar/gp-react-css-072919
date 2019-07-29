import React from "react";
import Card from "../Components/Card";
import { pika } from "../assets";
import "../Stylesheets/cardContainer.scss";

import data from "../Data";

class CardsContainer extends React.Component {
  cards = data.map(obj => <Card key={obj.id} data={obj} />);
  render() {
    return (
      <section className="section" id="cards-section">
        {pika}
        <h2>Place Holder</h2>
        {this.cards}
      </section>
    );
  }
}

export default CardsContainer;

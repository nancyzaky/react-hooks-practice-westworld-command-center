import React, { useState, useEffect } from "react";
import { Card } from "semantic-ui-react";
import Host from "./Host";

function HostList({ info, setInfo, cards, setCards }) {
  const fetchUrl = () => {
    fetch("http://localhost:4000/hosts")
      .then((resp) => resp.json())
      .then((data) => {
        setCards(data);
      });
  };
  useEffect(() => {
    fetchUrl();
  }, [setCards]);
  return (
    <Card.Group itemsPerRow={6}>
      {cards.map((card) => {
        return <Host card={card} key={card.id} info={info} setInfo={setInfo} />;
      })}
    </Card.Group>
  );
}

export default HostList;

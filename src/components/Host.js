import React from "react";
import { Card } from "semantic-ui-react";
import "../stylesheets/Host.css";

function Host({ card, info, setInfo }) {
  const {
    id,
    firstName,
    lastName,
    active,
    imageUrl,
    gender,
    area,
    authorized,
  } = card;
  /* NOTE: The className "host selected" renders a different style than simply "host". */

  return (
    <Card
      className="host selected"
      onClick={() => {
        setInfo(card);
      }}
      image={imageUrl}
      raised
      link
    />
  );
}

export default Host;

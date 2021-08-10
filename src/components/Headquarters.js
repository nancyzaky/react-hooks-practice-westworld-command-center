import React, { useState } from "react";
import { Grid } from "semantic-ui-react";
import Details from "./Details";
import "../stylesheets/Headquarters.css";
import LogPanel from "./LogPanel";
import ColdStorage from "./ColdStorage";

function Headquarters({ items, setItems }) {
  const [info, setInfo] = useState(null);
  const [cards, setCards] = useState([]);

  return (
    <Grid celled="internally">
      <Grid.Column width={8}>
        <ColdStorage
          info={info}
          setInfo={setInfo}
          cards={cards}
          setCards={setCards}
        />
      </Grid.Column>
      <Grid.Column width={5}>
        <Details
          info={info}
          setInfo={setInfo}
          items={items}
          setItems={setItems}
          cards={cards}
          setCards={setCards}
        />
      </Grid.Column>
      <Grid.Column width={3}>
        <LogPanel />
      </Grid.Column>
    </Grid>
  );
}

export default Headquarters;

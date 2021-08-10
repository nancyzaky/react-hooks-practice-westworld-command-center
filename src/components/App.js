import React, { useState } from "react";
import { Segment } from "semantic-ui-react";
import "../stylesheets/App.css";
import WestworldMap from "./WestworldMap";
import Headquarters from "./Headquarters";

function App() {
  const [items, setItems] = useState([]);
  return (
    <Segment id="app">
      <WestworldMap items={items} setItems={setItems} />
      <Headquarters items={items} setItems={setItems} />
    </Segment>
  );
}

export default App;

import React, { useState, useEffect } from "react";
import { Segment } from "semantic-ui-react";
import Area from "./Area";

function WestworldMap({ items, setItems }) {
  const [areas, setAreas] = useState([]);
  const fetchUrl = () => {
    fetch("http://localhost:4000/areas")
      .then((resp) => resp.json())
      .then((data) => {
        setAreas(data);
      });
  };
  useEffect(() => {
    fetchUrl();
  }, []);
  return (
    <Segment id="map">
      {areas.map((area) => {
        return <Area area={area} items={items} setItems={setItems} />;
      })}
    </Segment>
  );
}

export default WestworldMap;

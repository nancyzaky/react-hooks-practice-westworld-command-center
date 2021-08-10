import React from "react";
import { Segment } from "semantic-ui-react";
import HostList from "./HostList";

function ColdStorage({ info, setInfo, cards, setCards }) {
  return (
    <Segment.Group className="HQComps">
      <Segment compact>
        <h3 className="labels">ColdStorage</h3>
      </Segment>
      <Segment compact>
        <HostList
          info={info}
          setInfo={setInfo}
          cards={cards}
          setCards={setCards}
        />
      </Segment>
    </Segment.Group>
  );
}

export default ColdStorage;

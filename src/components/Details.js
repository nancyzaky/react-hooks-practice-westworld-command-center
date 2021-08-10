import React from "react";
import { Segment, Image } from "semantic-ui-react";
import * as Images from "../services/Images";
import HostInfo from "./HostInfo";

function Details({ info, setInfo, items, setItems, cards, setCards }) {
  // We'll render the logo if no host is selected. But if a host does get selected....
  // Watch the video to see how this works in the app.
  console.log(info);
  return (
    <Segment id="details" className="HQComps">
      {info ? (
        <HostInfo
          info={info}
          setInfo={setInfo}
          items={items}
          setItems={setItems}
          cards={cards}
          setCards={setCards}
        />
      ) : (
        <Image size="medium" src={Images.westworldLogo} />
      )}
    </Segment>
  );
}

export default Details;

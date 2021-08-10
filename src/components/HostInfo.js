import React, { useState, useEffect } from "react";
import {
  Radio,
  Icon,
  Card,
  Grid,
  Image,
  Dropdown,
  Divider,
} from "semantic-ui-react";
import "../stylesheets/HostInfo.css";

function HostInfo({ info, setInfo, items, setItems, cards, setCards }) {
  console.log(info);
  // This state is just to show how the dropdown component works.
  // Options have to be formatted in this way (array of objects with keys of: key, text, value)
  // Value has to match the value in the object to render the right text.

  // IMPORTANT: But whether it should be stateful or not is entirely up to you. Change this component however you like.
  const [value, setValue] = useState(null);
  const [id, setId] = useState(null);
  const [active, setActive] = useState(null);
  useEffect(() => {
    setValue(info.area);
    setActive(info.active);
    console.log(active);
    setId(info.id);
  }, [info]);
  const [options, setOption] = useState([
    { key: "lowlands", text: "lowlands", value: "lowlands" },
    { key: "high_plains", text: "high_plains", value: "high_plains" },
    {
      key: "under_construction",
      text: "under_construction",
      value: "under_construction",
    },
    { key: "pariah", text: "pariah", value: "pariah" },
    { key: "python_pass", text: "python_pass", value: "python_pass" },
    { key: "badlands", text: "badlands", value: "badlands" },
  ]);

  function handleOptionChange(e, { value }) {
    console.log(e.target.value);
    setValue(e.target.value);
    console.log(value);
    // the 'value' attribute is given via Semantic's Dropdown component.
    // Put a debugger or console.log in here and see what the "value" variable is when you pass in different options.
    // See the Semantic docs for more info: https://react.semantic-ui.com/modules/dropdown/#usage-controlled
  }

  function handleRadioChange(key) {
    setActive((active) => {
      console.log(active);
      return !active;
    });
    console.log(active);
    fetch(`http://localhost:4000/hosts/${key}`, {
      method: "PATCH",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ active: active }),
    })
      .then((resp) => resp.json())
      .then((data) => {
        let newArr = cards.filter((card) => {
          return card.id !== key;
        });
        console.log(newArr);
        setCards([...cards, data]);
      });
  }

  return (
    <Grid>
      <Grid.Column width={6}>
        <Image
          src={info.imageUrl}
          floated="left"
          size="small"
          className="hostImg"
        />
      </Grid.Column>
      <Grid.Column width={10}>
        <Card>
          <Card.Content>
            <Card.Header>
              {info.firstName} |{" "}
              {info.gender === "Male" ? (
                <Icon name="man" />
              ) : (
                <Icon name="woman" />
              )}
            </Card.Header>
            <Card.Meta>
              <Radio
                onChange={() => handleRadioChange(id)}
                label={active ? "Active" : "Decommission"}
                checked={active}
                slider
              />
            </Card.Meta>
            <Divider />
            Current Area:
            <Dropdown
              onChange={handleOptionChange}
              value={value}
              options={options}
              selection
            />
          </Card.Content>
        </Card>
      </Grid.Column>
    </Grid>
  );
}

export default HostInfo;

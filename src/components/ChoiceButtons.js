import React from "react";
import { ButtonGroup, ToggleButton } from "react-bootstrap";

const ChoiceButtons = (props) => {
  const { radios, radioValue, setRadioValue } = props;

  return (
    <ButtonGroup>
      {radios.map((radio, idx) => (
        <ToggleButton
          key={radio.value}
          id={`radio-${radio.value}`}
          type="radio"
          variant="outline-light"
          name="radio"
          value={radio.value}
          checked={radioValue === radio.value}
          onChange={(e) => setRadioValue(e.currentTarget.value)}
        >
          {radio.name}
        </ToggleButton>
      ))}
    </ButtonGroup>
  );
};

export default ChoiceButtons;

import React, { useEffect, useState } from "react";
import { Card, Button, Accordion } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { answersClear } from "../redux/answersSlice";
import "../style/Home.css";
import ChoiceButtons from "./ChoiceButtons";
import { Link } from "react-router-dom";

const Home = () => {
  //state that will choose difficulty level
  const [difficultyValue, setDifficultyValue] = useState("easy");
  //state to choose amount of questions
  const [amountValue, setAmountValue] = useState(10);
  //difficulty level option buttons (<ButtonGroup/>)
  const difficulties = [
    { name: "Easy", value: "easy" },
    { name: "Medium", value: "medium" },
    { name: "Hard", value: "hard" },
  ];
  //amounts of questions option buttons
  const amounts = [
    { name: "5", value: 5 },
    { name: "10", value: 10 },
    { name: "20", value: 20 },
  ];

  //clear all answers if home is reloaded by pressing back button or mistake
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(answersClear());
  });

  //displays choices of difficulty buttons
  const displayDifficultyButtons = () => {
    return (
      <ChoiceButtons
        radios={difficulties}
        radioValue={difficultyValue}
        setRadioValue={setDifficultyValue}
      />
    );
  };
  //displays choices of amount of questions buttons
  const displayAmountButtons = () => {
    return (
      <ChoiceButtons
        radios={amounts}
        radioValue={amountValue}
        setRadioValue={setAmountValue}
      />
    );
  };

  return (
    <div>
      <Card className="home-card text-center text-white">
        <h1>
          Welcome to the <p className="title">TRIVIA CHALLENGE</p>
        </h1>
        <div className="intro">
          <h3>
            You will be presented with
            <div>
              {amountValue}{" "}
              {difficultyValue[0].toUpperCase() + difficultyValue.slice(1)}
            </div>
            <p>'True or False' Questions</p>
          </h3>
        </div>

        <span className="choices">Settings:</span>
        <Accordion variant="light" defaultActiveKey="">
          <Accordion.Item eventKey="0">
            <Accordion.Header className="text-center">
              Difficulty
            </Accordion.Header>
            <Accordion.Body>
              <div>{displayDifficultyButtons()}</div>
            </Accordion.Body>{" "}
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>Number of Questions</Accordion.Header>
            <Accordion.Body>
              <div>{displayAmountButtons()}</div>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
        <div className="intro">
          <h3>
            Can you score <p>100%?</p>
          </h3>
        </div>

        <div className="intro">
          <div className="begin-game">
            <Button
              as={Link}
              to={`/game/${difficultyValue}/${amountValue}`}
              variant="outline-light"
              size="lg"
            >
              BEGIN
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Home;

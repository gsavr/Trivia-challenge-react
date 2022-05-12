import React from "react";
import { decode } from "he";
import { Card, ListGroup, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { answersClear } from "../redux/answersSlice";
import "../style/ResultsCard.css";
import { useNavigate } from "react-router-dom";

const ResultsCard = (props) => {
  //get list of answers from redux state passed down as prop
  const { answers, numCorrect } = props;
  const navigate = useNavigate();
  const dispatch = useDispatch();

  //when play again button is pressed - cleaer out redux answers store and navigate to home page
  const playAgain = () => {
    dispatch(answersClear());
    navigate("/");
  };

  return (
    <div>
      <Card className="results-card text-center text-white">
        <Card.Header className="italic">Results</Card.Header>
        <Card.Title>
          You scored {numCorrect}/{answers.length} {" — "}Difficulty:{" "}
          {answers[0].question.difficulty.toUpperCase()}
        </Card.Title>
        <ListGroup variant="flush" className="results">
          <div>
            {answers.map((answer, i) => {
              return (
                <div key={i}>
                  <ListGroup.Item>
                    <p className="text-start italic">
                      Question {i + 1}:{" "}
                      {answer.correct
                        ? decode("&#10003; Correct")
                        : decode("&#10005; Incorrect")}
                    </p>
                    <p>{decode(answer.question.question)}</p>
                    <p className="text-start italic">
                      Correct Answer: {answer.question.correct_answer}
                    </p>
                  </ListGroup.Item>
                </div>
              );
            })}
          </div>
        </ListGroup>
        <Button variant="outline-light" onClick={playAgain}>
          Play again?
        </Button>
      </Card>
    </div>
  );
};

export default ResultsCard;

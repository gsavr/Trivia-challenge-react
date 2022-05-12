import React from "react";
import { decode } from "he";
import { Card, Button } from "react-bootstrap";
import "../style/QuestionCard.css";

const QuestionCard = (props) => {
  const {
    question,
    numQuestions,
    currentQuestion,
    storeAnswer,
    setCurrentQuestion,
  } = props;

  //correct will send a boolean correct tag to redux store
  let correct = true;
  //fn to run when "true" answer is chosen - button
  const answerTrue = (answer) => {
    //f answer is correct - store question with correct flag
    if (question.correct_answer.toLowerCase() === answer) {
      storeAnswer({ question, correct });
      //else, store question without correct flag
    } else {
      storeAnswer({ question });
    }
    setCurrentQuestion(currentQuestion + 1);
  };

  //fn to run when "false" answer is chosen - button
  const answerFalse = (answer) => {
    //f answer is correct - store question with correct flag
    if (question.correct_answer.toLowerCase() === answer) {
      storeAnswer({ question, correct });
    } else {
      storeAnswer({ question });
    }
    setCurrentQuestion(currentQuestion + 1);
  };

  return (
    <div>
      <Card className="question-card text-center text-black">
        <Card.Header>TRIVIA CHALLENGE</Card.Header>
        <Card.Title>{question.category}</Card.Title>
        <Card.Body>
          <Card.Text>{decode(question.question)}</Card.Text>
          <h5 className="question-number">
            Question {currentQuestion + 1} of {numQuestions}
            <p>
              {question.difficulty[0].toUpperCase() +
                question.difficulty.slice(1)}
            </p>
          </h5>
          <Button
            className="answer-button true"
            onClick={() => answerTrue("true")}
            variant="outline-warning"
            size="lg"
          >
            True
          </Button>
          <Button
            className="answer-button false"
            onClick={() => answerFalse("false")}
            variant="outline-warning"
            size="lg"
          >
            False
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default QuestionCard;

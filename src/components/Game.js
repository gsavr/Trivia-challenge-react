import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useFetchQuestionsQuery } from "../redux/questionsApiSlice";
import { useSelector, useDispatch } from "react-redux";
import { answerAdd } from "../redux/answersSlice";
import QuestionCard from "./QuestionCard";
import ResultsCard from "./ResultsCard";
import LoadingSpinner from "./LoadingSpinner";

const Game = () => {
  //get difficulty and number of questions to fetch from params object from router
  let params = useParams();
  const { difficulty, amount } = params;
  //set of questions for round using redux query hook
  const {
    data = [],
    refetch,
    isFetching,
    isSuccess,
    isError,
  } = useFetchQuestionsQuery({ difficulty, amount });
  //clear out old questions and fetch new ones
  useEffect(() => {
    refetch();
  }, [refetch]);
  //set questions in array variable
  const questions = data.results;
  //question currently on screen
  const [currentQuestion, setCurrentQuestion] = useState(0);

  //store answers in Redux store
  const answers = useSelector((state) => state.answers);
  const dispatch = useDispatch();

  //store answers with flags for correct answers in redux store
  const storeAnswer = (question, correct) => {
    dispatch(answerAdd(question, correct));
  };

  //display questions or results component
  const displayQuestions = () => {
    //when end of questions is reached -- show results
    if (currentQuestion + 1 > questions.length) {
      return (
        <ResultsCard
          answers={answers.answers}
          numCorrect={answers.correct_answers}
        />
      );
    } else {
      //otherwise show the current question card
      // eslint-disable-next-line array-callback-return
      return questions.map((question, i) => {
        if (currentQuestion === i) {
          return (
            <QuestionCard
              key={i}
              question={question}
              numQuestions={questions.length}
              currentQuestion={currentQuestion}
              storeAnswer={storeAnswer}
              setCurrentQuestion={setCurrentQuestion}
            />
          );
        }
      });
    }
  };

  const onScreen = () => {
    if (isFetching) {
      return <LoadingSpinner />;
    } else if (isSuccess) {
      return displayQuestions();
    } else if (isError) {
      return <div>Error loading — Please try again</div>;
    }
  };

  return <div>{onScreen()}</div>;
};

export default Game;

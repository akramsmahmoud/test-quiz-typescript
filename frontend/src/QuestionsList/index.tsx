import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import QuestionItem from './QuestionItem';
import './questionsList.css';
import Screen, { Question, QuestionState } from '../types';

const initialState: QuestionState = {
  nr: 0,
  total: 0,
  score: 0,
  isAnswered: false
};

interface Props {
  switchScreen: (screen: Screen, score?: number) => void;
}

const QuestionsList = ({ switchScreen }: Props) => {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [questionState, setQuestionState] = useState<QuestionState>(initialState);
  useEffect(() => {
    let isMounted = true;
    fetch('http://localhost:8000/generate-quiz/', { method: 'POST' })
      .then((data) => data.json())
      .then((data) => {
        if (isMounted) {
          setQuestions(Object.values(data));
          console.log(questions);
        }
      });
    return () => {
      isMounted = false;
    };
  }, [setQuestions]);

  let { nr, total, score } = questionState;
  const isFinished = total > 0 && total === nr;
  isFinished && switchScreen(Screen.RESULTS, score);

  const nextQuestion = (isCorrect?: Boolean) => {
    const newScore: number = isCorrect ? score + 1 : score;
    setQuestionState({ ...questionState, nr: nr + 1, total: questions.length, score: newScore });
  };
  return (
    <>
      <Header />
      {!isFinished && questions[nr] && (
        <QuestionItem
          item={questions[nr]}
          questionState={questionState}
          handleNextQuestion={nextQuestion}
        />
      )}
    </>
  );
};

export default QuestionsList;

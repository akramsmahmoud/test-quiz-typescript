import React from 'react';
import Header from '../components/Header';
import Screen from '../types';
import score_1 from '../score-1.svg';
import score_2 from '../score-2.svg';
import score_3 from '../score-3.svg';
import './result.css';
import Button from '../components/Button';

interface Props {
  switchScreen: (screen: Screen, score?: number) => void;
  score: number;
}

const Result = ({ switchScreen, score }: Props) => {
  const score_bla = (score: number) => {
    if (score == 3) {
      return (
        <>
          <h2 className="score-text">Bravissimo!</h2>
          <img src={score_3} alt="Bravissimo!" />
        </>
      );
    } else if (score == 2) {
      return (
        <>
          <h2 className="score-text">Ci sei quasi</h2>
          <img src={score_2} alt="ci sei quasi" />
        </>
      );
    } else {
      return (
        <>
          <h2 className="score-text">Poteva andare meglio!</h2>
          <img src={score_1} alt="Poteva andare meglio!" />
        </>
      );
    }
  };

  return (
    <>
      <Header />
      <div className="result-container">
        <div className="score">{score}/3</div>
        {score_bla(score)}
        <Button onClick={() => switchScreen(Screen.HOME)}>Torna all inizio del quiz</Button>
      </div>
    </>
  );
};
export default Result;

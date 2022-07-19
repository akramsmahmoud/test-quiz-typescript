import React, { useState } from 'react';
import './App.css';
import Home from '../Home';
import QuestionsList from '../QuestionsList';
import Result from '../Result';
import Screen from '../types';

function App() {
  const [currentScreen, setCurrentScreen] = useState(Screen.HOME);
  const [score, setScore] = useState(0);

  const switchScreen = (screen: Screen, score?: number) => {
    setCurrentScreen(screen);
    score && setScore(score);
    if (screen === Screen.HOME) setScore(0);
  };

  const screens = {
    [Screen.HOME]: <Home switchScreen={switchScreen} />,
    [Screen.QUESTIONS]: <QuestionsList switchScreen={switchScreen} />,
    [Screen.RESULTS]: <Result switchScreen={switchScreen} score={score} />
  };

  return <div className="App">{screens[currentScreen]}</div>;
}

export default App;

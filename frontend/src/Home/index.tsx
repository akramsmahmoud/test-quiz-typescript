import React from 'react';
import './home.css';
import logo from '../logo.svg';
import Button from '../components/Button';
import Screen from '../types';

interface Props {
  switchScreen: (screen: Screen, score?: number) => void;
}

const Home = ({ switchScreen }: Props) => {
  return (
    <header className="App-home">
      <h1>
        <img src={logo} className="App-logo" alt="Quiz app logo" />
      </h1>
      <Button onClick={() => switchScreen(Screen.QUESTIONS)}>Inzia</Button>
    </header>
  );
};

export default Home;

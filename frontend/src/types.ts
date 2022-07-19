enum Screen {
  HOME = 'Homes',
  QUESTIONS = 'Questions',
  RESULTS = 'Results'
}

export interface switchScreen {
  screen: Screen;
  score?: number;
}

type Answer = {
  [key: number]: string;
};

export type Question = {
  question: string;
  answers: Answer;
};

export type QuestionState = {
  nr: number;
  total: number;
  score: number;
  isAnswered: boolean;
};

export default Screen;

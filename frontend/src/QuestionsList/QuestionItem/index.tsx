import React, { useState } from 'react';
import './questionsItem.css';
import { Question, QuestionState } from '../../types';
import Button from '../../components/Button';
import Timer from '../../components/Timer';
const load_next_quest_time = 800;
type Props = {
  item: Question;
  questionState: QuestionState;
  handleNextQuestion: (isCorrect?: Boolean) => void;
};

const QuestionItem = (props: Props) => {
  const { item, questionState, handleNextQuestion } = props;
  const question_id = questionState.nr + 1;

  const [correctAnswer, setCorrectAnswer] = useState<number>();
  const [answered, setAnswered] = useState<number | false>();

  const checkAnswer2 = (answer_id: number): Promise<Boolean> => {
    return fetch('http://localhost:8000/answer/', {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        question_id: question_id,
        answer_id: answer_id
      })
    })
      .then((res) => res.json())
      .then((res: any) => {
        const isCorrect = res[0].toLowerCase() === 'true';
        console.log(isCorrect);

        if (isCorrect) {
          setCorrectAnswer(answer_id);
        }

        return isCorrect;
      });
  };
  const checkAnswer = (answer_id: number) => {
    setAnswered(answer_id);
    checkAnswer2(answer_id).then((isCorrect) => {
      if (isCorrect) {
        setTimeout(() => {
          handleNextQuestion(true);
          setAnswered(false);
        }, load_next_quest_time);
      } else {
        for (let answer in item.answers) {
          const currAnswerId = parseInt(answer);
          checkAnswer2(currAnswerId).then((isCorrect) => {
            isCorrect &&
              setTimeout(() => {
                handleNextQuestion(false);
                setAnswered(false);
              }, load_next_quest_time);
          });
        }
      }
    });
  };

  const getBtnType = (answer_id: number) => {
    if (answered) {
      if (answer_id === correctAnswer) {
        return 'success';
      } else if (answer_id === answered) {
        return 'failed';
      }

      return 'disabled';
    }
  };

  return (
    <div className="question-container">
      <h2 className="question-header">Domanda {question_id}</h2>
      {item.question && (
        <>
          <h3 className="question">{item.question}</h3>
          <ul className="answers-list">
            {Object.entries(item.answers).map((a, i) => {
              const answer_id = parseInt(a[0]);
              const btn_type = getBtnType(answer_id);
              return (
                <li key={i}>
                  <Button type={btn_type} onClick={() => checkAnswer(answer_id)}>
                    {a[1]}
                  </Button>
                </li>
              );
            })}
          </ul>
          <Timer callback={() => handleNextQuestion(false)} seconds={60} />
        </>
      )}
    </div>
  );
};
export default QuestionItem;

import { useState } from 'react';

import ProgressIndicator from './components/ProgressIndicator';
import QuestionBox from './components/QuestionBox';

function App() {
  const questions = [
    {
      title: '질문1 입니다.',
      desc: '설명1 입니다.',
      type: 'text',
      required: false,
      options: {},
    },
    {
      title: '질문2 입니다.',
      desc: '설명2입니다.',
      type: 'text',
      required: false,
      options: {},
    },
  ];

  const step = 0;

  const [answers, setAnswers] = useState([]);

  return (
    <div className="App">
      <ProgressIndicator />
      <QuestionBox
        question={questions[step]}
        questionsLength={questions.length}
        step={step}
        answer={answers[step]}
        setAnswer={(answer) => {
          setAnswers((prev) => {
            const newAnswers = [...prev];
            newAnswers[step] = answer;

            return newAnswers;
          });
        }}
      />
    </div>
  );
}

export default App;

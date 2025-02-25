import { useState } from 'react';
import { useParams } from 'react-router-dom';

import ProgressIndicator from '../../components/ProgressIndicator';
import QuestionBox from '../../components/QuestionBox';

export default function SurveyPage() {
  const params = useParams();

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

  const [answers, setAnswers] = useState([]);

  const step = parseInt(params.step);
  return (
    <div>
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

import { useParams } from 'react-router-dom';
import { useRecoilState, useRecoilValue } from 'recoil';
import styled from 'styled-components';

import answersState from '../../stores/answers/atom';
import questionsState from '../../stores/questions/atom';
import ActionButtons from '../ActionButtons';
import Body from '../Body';
import Desc from '../Desc';
import Title from '../Title';

export default function QuestionBox() {
  const params = useParams();

  const step = parseInt(params.step);

  const questions = useRecoilValue(questionsState);

  const [answers, setAnswers] = useRecoilState(answersState);

  const question = questions[step];
  const answer = answers[step];

  const setAnswer = (answer) => {
    setAnswers((prev) => {
      const newAnswers = [...prev];
      newAnswers[step] = answer;

      return newAnswers;
    });
  };

  return (
    <QuestionBoxWrapper>
      <Title>{question.title}</Title>
      <Desc>{question.desc}</Desc>
      <Body
        type={question.type}
        answer={answer}
        setAnswer={setAnswer}
        options={question.options}
      />
      <ActionButtons />
    </QuestionBoxWrapper>
  );
}

const QuestionBoxWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

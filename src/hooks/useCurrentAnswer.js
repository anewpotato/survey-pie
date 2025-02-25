import { useRecoilState } from 'recoil';

import answersState from '../stores/answers/atom';
import useStep from './useStep';

function useCurrentAnswer() {
  const step = useStep();

  const [answers, setAnswers] = useRecoilState(answersState);

  const answer = answers[step];

  const setAnswer = (answer) => {
    setAnswers((prev) => {
      const newAnswers = [...prev];
      newAnswers[step] = answer;

      return newAnswers;
    });
  };
  return [answer, setAnswer];
}

export default useCurrentAnswer;

import { selector } from 'recoil';

import surveyState from './surveyState';

const questionsLengthState = selector({
  key: 'questionsLengthState',
  get: ({ get }) => {
    return get(surveyState).questions.length;
  },
});

export default questionsLengthState;

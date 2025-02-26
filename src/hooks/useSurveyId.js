import { useParams } from 'react-router-dom';

function useSurveyId() {
  const params = useParams();

  const step = parseInt(params.surveyId);

  return step;
}

export default useSurveyId;

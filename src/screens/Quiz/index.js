/* eslint-disable react/prop-types */
import React from "react";
import QuizContainer from "../../components/QuizContainer";
import QuizBackground from "../..//components/QuizBackground";
import LoadingWidget from "../../components/LoadingWidget";
import QuestionWidgetExternal from "../../components/QuestionWidgetExternal";
import RestultWidgetExternal from "../../components/ResultWidgetExternal";

const screenStates = {
  QUIZ: "QUIZ",
  LOADING: "LOADING",
  RESULT: "RESULT",
};

export default function Quiz({ externalQuestions, externalBg }) {
  const [screenState, setScreenState] = React.useState(screenStates.LOADING);
  const [results, setResult] = React.useState([]);
  const [currentQuestion, setCurrentQuestion] = React.useState(0);
  const questionIndex = currentQuestion;
  const question = externalQuestions[questionIndex];
  const totalQuestions = externalQuestions.length;
  const bg = externalBg;

  function addResult(result) {
    setResult([...results, result]);
  }

  /* Função que troca o estado do componente Loading que aparece 
  na tela depois de 1s para as Questões */
  React.useEffect(() => {
    // fetch() ...
    setTimeout(() => {
      setScreenState(screenStates.QUIZ);
    }, 1 * 1000);
    // nasce === didMount
  }, []);

  /* Captura a ação do botão confirmar da resposta da questão */
  function handleSubmitQuiz() {
    const nextQuestion = questionIndex + 1;
    if (nextQuestion < totalQuestions) {
      setCurrentQuestion(nextQuestion);
    } else {
      setScreenState(screenStates.RESULT);
    }
  }
  return (
    <QuizBackground backgroundImage={bg}>
      <QuizContainer>
        {screenState === screenStates.QUIZ && (
          <QuestionWidgetExternal
            question={question}
            questionIndex={questionIndex}
            totalQuestions={totalQuestions}
            onSubmit={handleSubmitQuiz}
            addResult={addResult}
          />
        )}

        {screenState === screenStates.LOADING && <LoadingWidget />}

        {screenState === screenStates.RESULT && (
          <RestultWidgetExternal results={results} />
        )}
      </QuizContainer>
    </QuizBackground>
  );
}

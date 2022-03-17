/* eslint-disable react/prop-types */
import React from "react";
import db from "../db.json";
import QuizContainer from "../src/components/QuizContainer";
import QuizLogo from "../src/components/QuizLogo";
import QuizBackground from "../src/components/QuizBackground";
import LoadingWidget from "../src/components/LoadingWidget";
import QuestionWidget from "../src/components/QuestionWidget";
import RestultWidget from "../src/components/ResultWidget";

const screenStates = {
  QUIZ: "QUIZ",
  LOADING: "LOADING",
  RESULT: "RESULT",
};

export default function Quiz() {
  const [screenState, setScreenState] = React.useState(screenStates.LOADING);
  const [results, setResult] = React.useState([]);
  const totalQuestions = db.questions.length;
  const [currentQuestion, setCurrentQuestion] = React.useState(0);
  const questionIndex = currentQuestion;
  const question = db.questions[questionIndex];

  function addResult(result) {
    setResult([...results, result]);
  }

  /* Função que troca o estado do componente Loading que aparece 
  na tela depois de 1s para as Questões */
  React.useEffect(() => {
    // fetch() ...
    setTimeout(() => {
      setScreenState(screenStates.QUIZ);
    }, 3 * 1000);
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
    <QuizBackground backgroundImage={db.bg}>
      <QuizContainer>
        <QuizLogo />
        {screenState === screenStates.QUIZ && (
          <QuestionWidget
            question={question}
            questionIndex={questionIndex}
            totalQuestions={totalQuestions}
            onSubmit={handleSubmitQuiz}
            addResult={addResult}
          />
        )}

        {screenState === screenStates.LOADING && <LoadingWidget />}

        {screenState === screenStates.RESULT && (
          <RestultWidget results={results} />
        )}
      </QuizContainer>
    </QuizBackground>
  );
}

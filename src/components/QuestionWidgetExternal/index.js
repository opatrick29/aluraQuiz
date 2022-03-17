import Widget from "../Widget";
import Button from "../Button";
import AlternativeForm from "../../components/AlternativeForm";
import BackLinkArrow from "../BackLinkArrow";
import MessageSuccess from "../MessageSuccess";
import MessageWrong from "../MessageWrong";

const ToggleBtnConfirm = () => {
  if (document.getElementById("btnConfirm").click) {
    setTimeout(() => {
      document.getElementById("btnConfirm").style.display = "block";
    }, 3 * 1000);
    document.getElementById("btnConfirm").style.display = "none";
  }
};
/*
const disabledInput = () => {
  if (isSelected === false) {
    document.getElementsByTagName("input").disabled = true;
  } else {
    document.getElementById("input").disabled = true;
  }
};*/

function QuestionWidget({
  question,
  questionIndex,
  totalQuestions,
  onSubmit,
  addResult,
}) {
  const [selectedAlternative, setSelectedAlternative] = React.useState(
    undefined
  );
  const [isFormSubmited, setIsFromSubmited] = React.useState(false);
  const questionId = `question__${questionIndex}`;
  const isCorrect = selectedAlternative === question.answer;
  const hasAlternativeSelected = selectedAlternative !== undefined;
  return (
    <Widget>
      <Widget.Header>
        <BackLinkArrow href="/" />
        <h3>{`Pergunta ${questionIndex + 1} de ${totalQuestions}`}</h3>
      </Widget.Header>
      <img src={question.image} />
      <Widget.Content>
        <h2>{question.title}</h2>
        <p>{question.description}</p>
        <AlternativeForm
          onSubmit={(infosDoEvento) => {
            infosDoEvento.preventDefault();
            setIsFromSubmited(true);
            setTimeout(() => {
              addResult(isCorrect);
              onSubmit();
              setIsFromSubmited(false);
              setSelectedAlternative(undefined);
            }, 3 * 1000);
          }}
        >
          {question.alternatives.map((alternative, alternativeIndex) => {
            const alternativeId = `alternative__${alternativeIndex}`;
            const alternativeStatus = isCorrect ? "SUCCESS" : "ERROR";
            const isSelected = selectedAlternative === alternativeIndex;
            return (
              <Widget.Alternative
                as="label"
                key={alternativeId}
                htmlFor={alternativeId}
                data-selected={isSelected}
                data-status={isFormSubmited && alternativeStatus}
              >
                <input
                  id={alternativeId}
                  name={questionId}
                  onChange={() => setSelectedAlternative(alternativeIndex)}
                  type="radio"
                />
                {alternative}
              </Widget.Alternative>
            );
          })}
          <Button
            onClick={ToggleBtnConfirm}
            id="btnConfirm"
            type="submit"
            disabled={!hasAlternativeSelected}
          >
            Confirmar
          </Button>
          {isFormSubmited && isCorrect && (
            <Button.Wrapper>
              <MessageSuccess></MessageSuccess>
            </Button.Wrapper>
          )}
          {isFormSubmited && !isCorrect && (
            <Button.Wrapper>
              <MessageWrong></MessageWrong>
            </Button.Wrapper>
          )}
        </AlternativeForm>
      </Widget.Content>
    </Widget>
  );
}

export default QuestionWidget;

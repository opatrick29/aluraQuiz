import Widget from "../Widget";
import Button from "../Button";
import AlternativeForm from "../../components/AlternativeForm";
import BackLinkArrow from "../BackLinkArrow";
import MessageSuccess from "../MessageSuccess";
import MessageWrong from "../MessageWrong";
import { motion } from "framer-motion";
import InfoAnswer from "../InfoAnswer";
import db from "../../../db.json";

const ToggleBtnConfirm = () => {
  if (document.getElementById("btnConfirm").click) {
    setTimeout(() => {
      document.getElementById("btnConfirm").style.display = "block";
    }, 15 * 1000);
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
  const infoGif = () => {
    let infoHeader;
    if (questionIndex === 0) {
      infoHeader = db.questions[0].infoGif;
    } else if (questionIndex === 1) {
      infoHeader = db.questions[1].infoGif;
    } else if (questionIndex === 2) {
      infoHeader = db.questions[2].infoGif;
    } else if (questionIndex === 3) {
      infoHeader = db.questions[3].infoGif;
    } else if (questionIndex === 4) {
      infoHeader = db.questions[4].infoGif;
    } else if (questionIndex === 5) {
      infoHeader = db.questions[5].infoGif;
    } else if (questionIndex === 6) {
      infoHeader = db.questions[6].infoGif;
    } else if (questionIndex === 7) {
      infoHeader = db.questions[7].infoGif;
    } else if (questionIndex === 8) {
      infoHeader = db.questions[8].infoGif;
    } else if (questionIndex === 9) {
      infoHeader = db.questions[9].infoGif;
    }
    return infoHeader;
  };
  const gif = infoGif();
  const infoAnswer = () => {
    let information;
    if (questionIndex === 0) {
      information = db.questions[0].information;
    } else if (questionIndex === 1) {
      information = db.questions[1].information;
    } else if (questionIndex === 2) {
      information = db.questions[2].information;
    } else if (questionIndex === 3) {
      information = db.questions[3].information;
    } else if (questionIndex === 4) {
      information = db.questions[4].information;
    } else if (questionIndex === 5) {
      information = db.questions[5].information;
    } else if (questionIndex === 6) {
      information = db.questions[6].information;
    } else if (questionIndex === 7) {
      information = db.questions[7].information;
    } else if (questionIndex === 8) {
      information = db.questions[8].information;
    } else if (questionIndex === 9) {
      information = db.questions[9].information;
    }
    return information;
  };
  const info = infoAnswer();
  return (
    <Widget
      as={motion.div}
      transition={{ ease: "easeIn", duration: 0.5 }}
      variants={{
        show: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 300 },
      }}
      initial="hidden"
      animate="show"
    >
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
            }, 15 * 1000);
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
              <Button.Wrapper
                as={motion.div}
                initial={{ scale: 0 }}
                animate={{ rotate: 360, scale: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 260,
                  damping: 20,
                }}
              >
                <MessageSuccess />
              </Button.Wrapper>
              <InfoAnswer>
                <InfoAnswer.Header>
                  <h3>Resposta Correta!</h3>
                </InfoAnswer.Header>
                <img src={gif} alt="" />
                <p>{info}</p>
              </InfoAnswer>
            </Button.Wrapper>
          )}
          {isFormSubmited && !isCorrect && (
            <Button.Wrapper>
              <Button.Wrapper
                as={motion.div}
                initial={{ scale: 0 }}
                animate={{ rotate: 360, scale: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 260,
                  damping: 20,
                }}
              >
                <MessageWrong></MessageWrong>
              </Button.Wrapper>
              <InfoAnswer>
                <InfoAnswer.Header>
                  <h3>Resposta Errada!</h3>
                </InfoAnswer.Header>
                <img src={gif} alt="" />
                <p>{info}</p>
              </InfoAnswer>
            </Button.Wrapper>
          )}
        </AlternativeForm>
      </Widget.Content>
    </Widget>
  );
}

export default QuestionWidget;

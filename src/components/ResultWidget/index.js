import styled from "styled-components";
import Widget from "../Widget";

const ListPlayers = styled.div`
  padding: 0.5rem;
  margin-top: 2rem;
  border-radius: ${({ theme }) => theme.borderRadius};
  li {
    list-style: none;
    padding: 10px 15px;
    margin-bottom: 8px;
    border-radius: ${({ theme }) => theme.borderRadius};
    background-color: ${({ theme }) => `${theme.colors.primary}60`};
  }
`;
function ResultWidget({ name, results }) {
  const resultadoFinal = results.reduce((somatoriaAtual, resultAtual) => {
    const isAcerto = resultAtual === true;
    if (isAcerto) {
      return somatoriaAtual + 100;
    }
    return somatoriaAtual;
  }, 0);
  // Função que retorna uma mensagem (String) dependendo da pontuação que a pessoa fez.
  const resultMessage = () => {
    let mensagemResultado = "";
    if (resultadoFinal <= 300) {
      mensagemResultado = "Acho que esta na hora de resgatar essa nostalgia.";
    } else if (resultadoFinal >= 400 && resultadoFinal <= 700) {
      mensagemResultado =
        "Até que você lembra da sua infância, mas ainda falta algo.";
    } else {
      mensagemResultado = "É pelo visto você está bem velho hein... Parabéns";
    }
    return mensagemResultado;
  };
  var msg = resultMessage();
  // Função que retorna um gif dependendo da pontuação que a pessoa fez.
  const resultGif = () => {
    let resultadoGif;
    if (resultadoFinal <= 200) {
      resultadoGif = "https://media.giphy.com/media/xgeyRJzCYowoM/giphy.gif";
    } else if (resultadoFinal >= 300 && resultadoFinal <= 400) {
      resultadoGif = "https://tenor.com/view/initial-d-ae86-gif-19459749.gif";
    } else {
      resultadoGif =
        "https://media.tenor.com/images/b2202d792f37bbe9f6397b60e93ca66d/tenor.gif";
    }
    return resultadoGif;
  };
  var gif = resultGif();
  return (
    <Widget>
      <Widget.Header>Resultado</Widget.Header>
      <img src={gif} alt="Gif do resultado" />
      <Widget.Content>
        <span>
          {name}
          {msg}
        </span>
        <h3>Você fez {resultadoFinal} pontos, parabéns!</h3>
        <ListPlayers>
          {results.map((result, index) => (
            <li key={`result__${result}`}>
              {index + 1}ª Pergunta - {result === true ? "Acertou!" : "Errou!"}
            </li>
          ))}
        </ListPlayers>
        <a href="/">Voltar para a home</a>
      </Widget.Content>
    </Widget>
  );
}

export default ResultWidget;

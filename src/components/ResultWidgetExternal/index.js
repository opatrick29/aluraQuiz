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
    if (resultadoFinal <= 200) {
      mensagemResultado = "O importante é continuar tentando!";
    } else if (resultadoFinal >= 300 && resultadoFinal <= 400) {
      mensagemResultado = "Você esta quase lá!";
    } else {
      mensagemResultado = "Você é um mestre!";
    }
    return mensagemResultado;
  };
  var msg = resultMessage();
  // Função que retorna um gif dependendo da pontuação que a pessoa fez.
  const resultGif = () => {
    let resultadoGif;
    if (resultadoFinal <= 200) {
      resultadoGif = "https://media.giphy.com/media/yj5oYHjoIwv28/giphy.gif";
    } else if (resultadoFinal >= 300 && resultadoFinal <= 400) {
      resultadoGif = "https://media.giphy.com/media/JQQwgVUMDIyAM/giphy.gif";
    } else {
      resultadoGif =
        "https://media.giphy.com/media/xT8qBepJQzUjXpeWU8/giphy.gif";
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

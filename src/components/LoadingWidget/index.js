import styled from "styled-components";
import QuizBackground from "../QuizBackground";

const Loading = styled.div`
  width: 100%;
  height: 100%;
  background-size: 100vw 100vh;
  background-position: center;
  background-repeat: no-repeat;
  background-image: url("https://media.giphy.com/media/TvLuZ00OIADoQ/giphy.gif");
`;

function LoadingWidget() {
  return (
    <QuizBackground.Loading backgroundImage="none">
      <Loading></Loading>
    </QuizBackground.Loading>
  );
}

export default LoadingWidget;

/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { ThemeProvider } from "styled-components";
import QuizScreen from "../../src/screens/Quiz";

export default function QuizDaGalera({ dbExterno }) {
  return (
    <ThemeProvider theme={dbExterno.theme}>
      <QuizScreen
        externalQuestions={dbExterno.questions}
        externalBg={dbExterno.bg}
      />
    </ThemeProvider>
  );
}

export async function getServerSideProps(context) {
  const [projectName, githubUser] = context.query.id.split("___");

  try {
    const dbExterno = await fetch(
      `https://${projectName}.${githubUser}.vercel.app/api/db`
    )
      .then((respostaDoServer) => {
        if (respostaDoServer.ok) {
          return respostaDoServer.json();
        }
        throw new Error("Falha em pegar os dados");
      })
      .then((respostaConvertidaEmObjeto) => respostaConvertidaEmObjeto);
    return {
      props: {
        dbExterno,
      },
    };
  } catch (err) {
    throw new Error(err);
  }
}
/*
export async function getServerSideProps(context) {
  const [projectName, githubUser] = context.query.id.split("___");
  try {
    // Faz requisição ao servidor
    const dbExterno = await fetch(
      `https://${projectName}.${githubUser}.vercel.app/api/db`
    )
      // Verifica se a resposta do servidor ocorreu corretament ok(200)
      .then((respostaServidor) => {
        if (respostaServidor.ok) {
          return respostaServidor.json();
        }
        // Se não ele envia esse erro
        throw new Error("Falha ao pegar os dados do servidor");
      })
      // Depois da primeira verificação estar certa ele retorna o objeto convertido
      .then((respostaConvertidaEmObjeto) => respostaConvertidaEmObjeto);
    return {
      props: {
        dbExterno,
      },
    };
    // Caso der algum erro nessas verificações, é executado esse erro
  } catch (err) {
    throw new Error(err);
  }
}
*/

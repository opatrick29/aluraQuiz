import React from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import { motion } from "framer-motion";

import db from "../db.json";
import QuizContainer from "../src/components/QuizContainer";
import Widget from "../src/components/Widget";
import QuizLogo from "../src/components/QuizLogo";
import QuizBackground from "../src/components/QuizBackground";
import Input from "../src/components/Input";
import Button from "../src/components/Button";
import Footer from "../src/components/Footer";
import GitHubCorner from "../src/components/GitHubCorner";
import Link from "../src/components/Link";

export default function Home() {
  const router = useRouter();
  const [name, setName] = React.useState("");
  return (
    <QuizBackground backgroundImage={db.bg}>
      <Head>
        <title>Initial D - Quiz</title>
        <meta property="og:image" content={db.bg} />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon.ico" />
      </Head>
      <QuizContainer>
        <QuizLogo />
        <Widget
          as={motion.section}
          transition={{ duration: 0.5 }}
          variants={{
            show: { opacity: 1, y: 0 },
            hidden: { opacity: 0, y: 300 },
          }}
          initial="hidden"
          animate="show"
        >
          <Widget.Header>
            <h1>{db.title}</h1>
          </Widget.Header>
          <Widget.Content>
            <p>{db.description}</p>
            <form
              onSubmit={function (infosDoEvento) {
                infosDoEvento.preventDefault();
                router.push(`/quiz?name=${name}`);
              }}
            >
              <Input
                type="text"
                name="nomeDoUsuario"
                placeholder="Digite o seu nome para jogar"
                onChange={(infosDoEvento) =>
                  setName(infosDoEvento.target.value)
                }
                value={name}
              />
              <Button type="submit" disabled={name.length === 0}>
                Jogar
              </Button>
            </form>
          </Widget.Content>
        </Widget>

        <Widget
          as={motion.section}
          transition={{ delay: 1, duration: 0.5 }}
          variants={{
            show: { opacity: 1, y: 0 },
            hidden: { opacity: 0, y: 500 },
          }}
          initial="hidden"
          animate="show"
        >
          <Widget.Content>
            <h1>Quizes da Galera</h1>
            <ul>
              {db.external.map((linkExterno) => {
                const [projectName, githubUser] =
                  /* Expressão regular para retirar as barras e 
                   outros elementos do link externo*/
                  linkExterno
                    .replace(/\//g, "")
                    .replace("https:", "")
                    .replace(".vercel.app", "")
                    // Separa o valor tendo com referência o ponto
                    .split(".");
                return (
                  <li key={linkExterno}>
                    <Widget.Alternative
                      as={Link}
                      href={`/quiz/${projectName}___${githubUser}`}
                    >
                      {`${githubUser}/${projectName}`}
                    </Widget.Alternative>
                  </li>
                );
              })}
            </ul>
          </Widget.Content>
        </Widget>
        <Footer
          as={motion.footer}
          transition={{ delay: 1.5, duration: 1 }}
          variants={{
            show: { opacity: 1 },
            hidden: { opacity: 0 },
          }}
          initial="hidden"
          animate="show"
        />
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/POliveira29" />
    </QuizBackground>
  );
}

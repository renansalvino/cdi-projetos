
import {
  Box,
  Text,
  Heading,
  Image,
  Link,
  UnorderedList,
  ListItem,
} from "@chakra-ui/react";
import React from 'react';
import './home.css';
import TitleHome from "../../components/TitleHome";
import areas from './areas.json'

function Home() {

  const areasData = areas.areas;

  return (
    <>
      <TitleHome />
      <div style={{ backgroundColor: 'white' }}>
        <Box className="contentAboutUs">
          <Heading as="h2">Sobre nós</Heading>
          <Text>
            A Comissão Discente de Informática (CDI) da Unicamp é um elo vital
            entre alunos e docentes, facilitando a comunicação. Além disso,
            promove eventos como cursos, palestras e visitas técnicas em parceria
            com a comunidade e empresas de tecnologia. Nós trabalhamos para que
            sua jornada na Universidade seja aproveitada da melhor forma possível!
            Conte com a CDI durante seu ano letivo para tirar dúvidas e sugerir
            ideias.
          </Text>
        </Box>
        <Box display="flex" justifyContent="space-between" marginInline={10}>
          <Box
            width="234px"
            height="231px"
            backgroundColor="#D9D9D9"
            position="relative"
            marginBottom="5px"
          >
            <Box position="absolute" top="50%" left="0" transform="translateY(-50%)">
              <span>&#8656;</span>
            </Box>
          </Box>
          <Box
            width="234px"
            height="231px"
            backgroundColor="#D9D9D9"
            position="relative"
            marginBottom="5px"
          ></Box>
          <Box
            width="234px"
            height="231px"
            backgroundColor="#D9D9D9"
            position="relative"
            marginBottom="5px"
          ></Box>
          <Box
            width="234px"
            height="231px"
            backgroundColor="#D9D9D9"
            position="relative"
            marginBottom="5px"
          >
            <Box position="absolute" top="50%" right="0" transform="translateY(-50%)">
              <span>&#8658;</span>
            </Box>
          </Box>
        </Box>
        <Box className="contentCourses">
          <Heading as="h2">Cursos</Heading>
          <Box className="contentBsiCourse" display="flex">
            <Box className="imageBsiCourse">
              <Image src="./img/imagemBSI.png" alt="" />
            </Box>
            <Box className="contentTextBsiCourse">
              <Box className="textBsiCourse">
                <Heading as="h3">Bacharelado em Sistema da Informação</Heading>
                <Text>
                  O curso de S.I possui um papel fundamental em um mundo que
                  viabiliza a rapidez da informação pois a compreensão dos
                  sistemas informacionais é de extrema importância. O profissional
                  qualificado pela área desenvolve duas principais habilidades:
                  projetar e implantar os sistemas que integram o mundo digital.
                </Text>
                <UnorderedList>
                  <ListItem>
                    <Image src="assets/checkIcon.svg" alt="Ícone de check" />
                    Período: Integral
                  </ListItem>
                  <ListItem>
                    <Image src="assets/checkIcon.svg" alt="Ícone de check" />
                    Carga horária estimada: 3.060 horas
                  </ListItem>
                  <ListItem>
                    <Image src="assets/checkIcon.svg" alt="Ícone de check" />
                    Integralização: 08 semestres
                  </ListItem>
                  <ListItem>
                    <Image src="assets/checkIcon.svg" alt="Ícone de check" />
                    Vagas: 45
                  </ListItem>
                </UnorderedList>
                <Link
                  href="https://www.dac.unicamp.br/sistemas/catalogos/grad/catalogo2023/cursos/94g/curriculo.html"
                  target="_blank"
                >
                  <button>Acesse o currículo pleno</button>
                </Link>
              </Box>
            </Box>
          </Box>
          <Box className="contentTadsCourse" display="flex">
            <Box className="contentTextTadsCourse">
              <Box className="textTadsCourse">
                <Heading as="h3">
                  Tecnologia em Análise e Desenvolvimento de Sistemas
                </Heading>
                <Text>
                  O curso de T.A.D.S, têm como intuito formar profissionais com
                  uma base sólida, de modo ao qual seja prático aplicar os
                  conhecimentos teóricos na intensa vivência prática que o mundo
                  da tecnologia proporciona.
                </Text>
                <UnorderedList>
                  <ListItem>
                    <Image src="assets/checkIcon.svg" alt="Ícone de check" />
                    Período: Noturno
                  </ListItem>
                  <ListItem>
                    <Image src="assets/checkIcon.svg" alt="Ícone de check" />
                    Carga horária estimada: 2.430 horas
                  </ListItem>
                  <ListItem>
                    <Image src="assets/checkIcon.svg" alt="Ícone de check" />
                    Integralização: 07 semestres
                  </ListItem>
                  <ListItem>
                    <Image src="assets/checkIcon.svg" alt="Ícone de check" />
                    Vagas: 45
                  </ListItem>
                </UnorderedList>
                <Link
                  href="https://www.dac.unicamp.br/sistemas/catalogos/grad/catalogo2023/cursos/36t/curriculo.html"
                  target="_blank"
                >
                  <button>Acesse o currículo pleno</button>
                </Link>
              </Box>
            </Box>
            <Box className="imageTadsCourse">
              <Image src="./img/imagemTADS.png" alt="" />
            </Box>
          </Box>
        </Box>
        <Box className="contentAreas">
          <Heading as="h2">Áreas</Heading>
          <br />
          {areasData.map((area, index) => (
            <Box key={index} className="area">
              <Heading as="h3">{area.nome}</Heading>
              <br />
              <Box className="memberContainer" display="flex">
                {area.membros.map((membro, i) => (
                  <Box key={i} className="member">
                    <Image src="./img/area_simbolico.jpg" alt={`Membro ${i + 1}`} />
                    <Text className="memberName">{membro}</Text>
                  </Box>
                ))}
              </Box>
            </Box>
          ))}
        </Box>

      </div>

    </>
  );
}

export default Home;
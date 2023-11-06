import React from "react";
import { Box, Heading, Text, Flex, Button, Grid, GridItem } from "@chakra-ui/react";

const ImageCard = () => {
  return (
    <Grid templateColumns="1fr 2fr 1fr" mt={20} marginLeft={200}>
      <GridItem colSpan={2} textAlign="center" maxW="500px" justifySelf="center" ml={4}>
        <Box>
          <Heading color="#4330EC" mb="20px" fontFamily="heading" fontWeight="bold" fontSize="40px">
            Eletivas e Horas Complementares
          </Heading>
          <Box textAlign="justify">
            <Text fontSize="md" color="#000000" mb={4}>
              Em todos os nossos cursos, as horas complementares desempenham um papel fundamental no enriquecimento da sua formação acadêmica. Estas horas podem ser obtidas por meio de diversas atividades, como participação em palestras inspiradoras, visitas técnicas empolgantes, envolvimento em projetos de monitoria e muito mais. Abaixo, você encontrará informações detalhadas sobre a quantidade de horas complementares necessárias para a conclusão do seu curso e orientações sobre como conquistá-las.
            </Text>
            <Flex direction="column">
              <a href="https://www.dac.unicamp.br/sistemas/catalogos/grad/catalogo2024/index.html" target="_blank" class="button-link">
                <Button bg="#E4E5FF" color="#0002FE" size="md" mb={2}>
                  Catálogo dos Cursos de Graduação 2024
                </Button>
              </a>
              <a href="https://www.dac.unicamp.br/sistemas/catalogos/grad/catalogo2023/index.html" target="_blank" class="button-link">
                <Button bg="#E4E5FF" color="#0002FE" size="md" mb={2}>
                  Catálogo dos Cursos de Graduação 2023
                </Button>
              </a>
              <a href="https://www.dac.unicamp.br/sistemas/catalogos/grad/catalogo2022/index.html" target="_blank" class="button-link">
                <Button bg="#E4E5FF" color="#0002FE" size="md" mb={2}>
                  Catálogo dos Cursos de Graduação 2022
                </Button>
              </a>
              <a href="https://www.dac.unicamp.br/sistemas/catalogos/grad/catalogo2021/index.html" target="_blank" class="button-link">
                <Button bg="#E4E5FF" color="#0002FE" size="md" mb={2}>
                  Catálogo dos Cursos de Graduação 2021
                </Button>
              </a>
              <a href="https://www.dac.unicamp.br/sistemas/catalogos/grad/catalogo2020/index.html" target="_blank" class="button-link">
                <Button bg="#E4E5FF" color="#0002FE" size="md" mb={2}>
                  Catálogo dos Cursos de Graduação 2020
                </Button>
              </a>
              <a href="https://www.dac.unicamp.br/sistemas/catalogos/grad/catalogo2019/index.html" target="_blank" class="button-link">
                <Button bg="#E4E5FF" color="#0002FE" size="md" mb={2}>
                  Catálogo dos Cursos de Graduação 2019
                </Button>
              </a>
            </Flex>
          </Box>
        </Box>
      </GridItem>
      <GridItem colSpan={1} justifySelf="end" mt={6}>
        <Box>
          <img
            src="/campuslife/img/guia.png"
            alt="Descrição da Imagem"
            width="70%"
            height="auto"
            style={{ float: 'right' }}
          />
        </Box>
      </GridItem>
    </Grid>
  );
};

export default ImageCard;

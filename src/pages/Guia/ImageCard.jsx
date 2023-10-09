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
          <Text fontSize="md" color="#0002FE" mb={4}>
            Em todos os nossos cursos, as horas complementares desempenham um papel fundamental no enriquecimento da sua formação acadêmica. Estas horas podem ser obtidas por meio de diversas atividades, como participação em palestras inspiradoras, visitas técnicas empolgantes, envolvimento em projetos de monitoria e muito mais. Abaixo, você encontrará informações detalhadas sobre a quantidade de horas complementares necessárias para a conclusão do seu curso e orientações sobre como conquistá-las.
          </Text>
          <Flex direction="column">
            <Button bg="#E4E5FF" color="#0002FE" size="md" mb={2}>
              Iniciação Científica ou Tecnológica - Até 240 horas
            </Button>
            <Button bg="#E4E5FF" color="#0002FE" size="md" mb={2}>
              Empresa Junior - Até 60 horas
            </Button>
            <Button bg="#E4E5FF" color="#0002FE" size="md" mb={2}>
              Projetos financiados com recebimento de bolsas - Até 120 horas
            </Button>
            <Button bg="#E4E5FF" color="#0002FE" size="md" mb={2}>
              Programa de Apoio Didático (PAD) - Até 120 horas
            </Button>
            <Button bg="#E4E5FF" color="#0002FE" size="md" mb={2}>
              Intercâmbio pela DERI - Até 120 horas
            </Button>
            <Button bg="#E4E5FF" color="#0002FE" size="md" mb={2}>
              Estágio não obrigatório - até 120 horas
            </Button>
            <Button bg="#E4E5FF" color="#0002FE" size="md" mb={2}>
              Visitas técnicas ou culturais monitoradas - Até 60 horas.
            </Button>
            <Button bg="#E4E5FF" color="#0002FE" size="md" mb={2}>
              Ouvinte em atividades acadêmicas - Até 60 horas
            </Button><Button bg="#E4E5FF" color="#0002FE" size="md" mb={2}>
              Organização de atividades acadêmicas - Até 60 horas
            </Button>
            <Button bg="#E4E5FF" color="#0002FE" size="md" mb={2}>
              Apresentação em atividades acadêmicas - Até 60 horas
            </Button>
            <Button bg="#E4E5FF" color="#0002FE" size="md" mb={2}>
              Programas vinculados à órgãos externos - Até 120 horas
            </Button>
            <Button bg="#E4E5FF" color="#0002FE" size="md" mb={2}>
              Cursos extra-curriculares - Até 120 horas
            </Button>
            <Button bg="#E4E5FF" color="#0002FE" size="md" mb={2}>
              Participação em órgãos colegiados - Até 40 horas
            </Button>
            <Button bg="#E4E5FF" color="#0002FE" size="md" mb={2}>
              Participação em Orgs - Até 60 horas
            </Button>
          </Flex>
        </Box>
      </GridItem>
      <GridItem colSpan={1} justifySelf="end" mt={6}>
        <Box>
          <img
            src="/campuslife/img/guia.png"
            alt="Descrição da Imagem"
            width="100%"
            height="auto"
          />
        </Box>
      </GridItem>
    </Grid>
  );
};

export default ImageCard;

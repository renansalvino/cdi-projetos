import React from "react";
import { Box, Heading, Text, Flex, Button, Grid, GridItem } from "@chakra-ui/react";

const ImageCard = () => {
  return (
    <Grid templateColumns="1fr 2fr 1fr" mt={20} marginLeft={200}>
      <GridItem colSpan={2} textAlign="center" maxW="500px" justifySelf="center" ml={4}> 
        <Box>
          <Heading color="#0002FE" as="h2" fontSize="xl" mb={4}>
            Intercamp
          </Heading>
          <Text fontSize="md" color="#0002FE" mb={4}>
            O ônibus intercamp é um transporte gratuito cedido pela UNICAMP que possibilita que a comunidade da UNICAMP em Limeira (FT, FCA e Cotil) tenha acesso às atividades que ocorrem no campus de Barão Geraldo.
          </Text>
          <Flex direction="column">
            <Button bg="#E4E5FF" color="#0002FE" size="md" mb={2}>
              Clique para consultar horários
            </Button>
            <Button bg="#E4E5FF" color="#0002FE" size="md">
              Clique para fazer a reserva
            </Button>
          </Flex>
        </Box>
      </GridItem>
      <GridItem colSpan={1} justifySelf="end" mt={6}>
        <Box>
          <img
            src="/campuslife/img/Bus.jpeg"
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

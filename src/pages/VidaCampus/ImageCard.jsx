import React from "react";
import { Box, Heading, Text, Flex, Button, Grid, GridItem, Center } from "@chakra-ui/react";

const ImageCard = () => {
  return (
    <Grid templateColumns="1fr 2fr 1fr" mt={20} maxW="100%">
      <GridItem colSpan={1} textAlign="center" ml={4} justifySelf={"center"}> 
      </GridItem>
      <GridItem colSpan={1} textAlign="center" ml={4} maxW="50%" justifySelf={"center"}> 
        <Box>
          <Heading color="black" as="h2" fontSize="xl" mb={4} textAlign={'center'}>
            Intercamp
          </Heading>
            <Text fontSize="md" color="#0002FE" mb={4} textAlign="justify"> 
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

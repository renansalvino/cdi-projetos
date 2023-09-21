import { Box, Image, Text, Link } from "@chakra-ui/react";
import React, { useState } from "react"; // Importe o 'useState'

const ProfessorCard = ({ nome, lattes, img, areas }) => {
  const [isHovered, setIsHovered] = useState(false); // Crie um estado para controlar o hover

  return (
    <Box
      display="flex"
      maxW="60vw"
      margin="1em auto"
      bg="#f9f9f9"
      borderRadius="8px"
      padding="1em"
      color="primary.500"
      transition="transform 0.3s" // Adicione uma transição para a animação
      transform={isHovered ? "scale(1.1)" : "scale(1)"} // Use o transform para escalar o elemento
      onMouseEnter={() => setIsHovered(true)} // Altere o estado quando o mouse entrar
      onMouseLeave={() => setIsHovered(false)} // Altere o estado quando o mouse sair
    >
      <Image src={'/professores/img/' + img} alt={nome} w="150px" h="200px" borderRadius="10%" mr="1em" />
      <Box ml="50px" maxW="60%" textAlign="left">
        <Text fontSize="xl" color="#0002FE" fontWeight="bold" mb="0.5em">{nome}</Text>
        <Text fontSize="md" fontWeight="bold" mb="0.5em">Áreas de pesquisa:</Text>
        {areas.map((area) => (
            <Text>{area}</Text>
        ))}
        <br />
        <Link href={lattes} textDecoration="none">Link do currículo lates do professor
        </Link>
      </Box>
    </Box>
  );
};

export default ProfessorCard;

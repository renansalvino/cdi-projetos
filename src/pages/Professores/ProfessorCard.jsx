// ProfessorCard.js

import { Box, Image, Text, Link } from "@chakra-ui/react";

const ProfessorCard = ({ nome, lattes, img }) => {
    return (
    <Box
      display="flex"
      maxW="60vw"
      margin="1em auto"
      bg="#f9f9f9"
      borderRadius="8px"
      padding="1em"
    >
      <Image src={'/professores/img/'+img} alt={nome} w="50px" h="50px" borderRadius="100%" mr="1em" />
      <Box maxW="60%" textAlign="right">
        <Text fontSize="xl" fontWeight="bold" mb="0.5em">{nome}</Text>
        <Link href={lattes} textDecoration="none" color="#333">Ver perfil</Link>
      </Box>
    </Box>
  );
};

export default ProfessorCard;

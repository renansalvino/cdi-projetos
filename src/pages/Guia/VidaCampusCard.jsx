import React from "react";
import { Box, Button, Image, Text, UnorderedList, ListItem, Center } from "@chakra-ui/react";

const Card = ({ imageSrc, altText, description }) => {
  return (
    <Center>
      <Box margin="20px">
        <Image src={imageSrc} alt={altText} className="custom-image" marginLeft="280px" maxWidth="100" />
        <Box bg='#E4E5FF' maxW="md" borderWidth="1px" borderRadius="lg">
          <Box p="6">
            <Text as="span" d="block" fontSize="40px" color="#0002FE" mb="2">
              {description}
            </Text>
          </Box>
          <Text as="span" d="block" fontSize="16px" color="#0002FE" mb="2">
          Pensando em facilitar a sua vida, caro aluno, a CDI criou um grupo no WhatsApp para cada matéria
          </Text>
          <Button bg="#000000" color="#FFFFFF" size="md" mt={5}>
            Clique para saber mais
          </Button>
        </Box>
      </Box>
    </Center>
  );
};

export default Card;
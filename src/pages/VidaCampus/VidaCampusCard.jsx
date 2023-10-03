import React from "react";
import { Box, Button, Image, Text, UnorderedList, ListItem, Center } from "@chakra-ui/react";

const Card = ({ imageSrc, altText, description }) => {
  return (
    <Center>
      <Box margin="20px">
        <Image src={imageSrc} alt={altText} className="custom-image" marginLeft="280px" maxWidth="100" />
        <Box maxW="sm" borderWidth="1px" borderRadius="lg">
          <Box p="6">
            <Text  as="span" d="block" fontSize="40px" color="#0002FE" mb="2">
              {description}
            </Text>
            <UnorderedList>
              <ListItem>Café da manhã: das 07h00 às 08h30</ListItem>
              <ListItem>Almoço: das 10h30 às 14h00</ListItem>
              <ListItem>Jantar: das 17h30 às 19h45</ListItem>
            </UnorderedList>
          </Box>
        </Box>
        <Button bg="#0002FE" color="#FFFFFF" size="md" mt={5}>
              Clique para acessar o cardápio do dia
            </Button>
      </Box>
    </Center>
  );
};

export default Card;
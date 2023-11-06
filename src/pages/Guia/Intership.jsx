import React from "react";
import { Box, Button, Image, Text, UnorderedList, ListItem, Center } from "@chakra-ui/react";

const Intership = ({ imageSrc, altText, description }) => {
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
            Para ficar por dentro das principais vagas na área de tecnologia entre no nosso grupo do WhatsApp
          </Text>
          <a href="https://chat.whatsapp.com/HWNZ0QNluzREkLOGFax8TL" class="button-link">
            <Button bg="#000000" color="#FFFFFF" size="md" mt={5} style={{ marginBottom: '20px' }}>
              Clique para entrar no grupo
            </Button>
          </a>
        </Box>
      </Box>
    </Center>
  );
};

export default Intership;
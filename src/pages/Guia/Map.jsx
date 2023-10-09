import React from "react";
import { Box, Button, Image, Text, UnorderedList, ListItem, Center } from "@chakra-ui/react";

const Map = ({ imageSrc, altText, description }) => {
  return (
    <Center>
      <Box margin="20px">
        <Image src={imageSrc} alt={altText} className="custom-image" marginLeft="280px" maxWidth="100" />
        <Box bg='#E4E5FF' maxW="md" borderWidth="1px" borderRadius="lg">
          <Box p="6">
            <Text as="span" d="block" fontSize="40px" color="#0002FE" mb="2">
            </Text>
          </Box>
        </Box>
      </Box>
    </Center>
  );
};

export default Map;
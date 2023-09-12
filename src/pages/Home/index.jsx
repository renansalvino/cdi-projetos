import { Box, Text } from '@chakra-ui/react';
import React from 'react';
import {Overlay} from "../../components/Overlay"

function Home() {
  return (
    <Box w="100%">
            <Box>
                <Text pl="80px" m="none" pt="none" fontSize="xl" color="gray.500" fontWeight="bold">
                    nós somos a
                </Text>
                <Text pl="80px" m="none" pt="none" color="gray.100" fontSize="2xl" fontWeight="bold">
                    comissão discente de
                </Text>
                <Text pl="80px" m="none" pt="none" color="gray.100" fontSize="6xl" fontWeight="bold">
                    INFORMÁTICA
                </Text>
                <Text pl="80px" m="none" pt="none" color="gray.100" fontSize="xl" fontWeight="bold">
                    da Faculdade de Tecnologia da UNICAMP
                </Text>
            </Box>
        </Box>
  );
}

export default Home;
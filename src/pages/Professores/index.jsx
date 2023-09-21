import { Box, Heading, Text } from "@chakra-ui/react";
import React from "react"

function Professores() {

    return (
        <div >
            <Box
                bg="white"
                w={{ base: "100%", md: "90vw" }}
                mx="auto"
                p={4}
                textAlign="center"
                borderRadius="10px"
            >
                <Heading lineHeight="0.5" color="secondary.500" mx="auto" my="20px" w="80%">
                    <Text as="h2" m="20px" fontWeight="bold">
                        Nossos Professores de tecnologia
                    </Text>
                    <Text  as="samp" fontFamily="" fontSize={"sm"} color="primary.500">
                        Aqui você vai conhecer os professores da Faculdade de Tecnologia da Unicamp. Temos os melhores professores do Brasil, com as melhores qualificações e uma excelente base de conhecimento, podendo contar com seus diplomas internacionais como mestrados, doutorados e pós-graduações.
                    </Text>
                </Heading>

                <Box>
                    
                </Box>

            </Box>
        </div>
    )
}

export default Professores;
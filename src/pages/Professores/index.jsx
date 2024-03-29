import { Box, Heading, Text } from "@chakra-ui/react";
import React from "react";
import ProfessorCard from "./ProfessorCard";
import ProfessoresJson from "./professores.json";
import Title from "../../components/Title";

function Professores() {
    const professores = ProfessoresJson.data;
    console.log(professores);

    const title = "Professores"
    const subtitle = "Os melhores professores de tecnologia do Brasil estão aqui na FT-Unicamp!"

    return (
        <>
            <Title title={title} subtitle={subtitle} />
            <Box
                bg="white"
                w={{ base: "100%" }}
                mx="auto"
                p={4}
                textAlign="center"
                borderRadius="10px"
            >
                <Box textAlign="center" my="20px" w="80%" mx="auto">
                    <Heading color="secondary.500" mb="20px" fontFamily="heading" fontWeight="bold">
                        Nossos Professores de tecnologia
                    </Heading>
                    <Box lineHeight="1.5">
                        <Text fontFamily="body" fontWeight="light" fontSize="xs" color="primary.100">
                            Aqui você vai conhecer os professores da Faculdade de Tecnologia da Unicamp. Temos os melhores professores do Brasil, com as melhores qualificações e uma excelente base de conhecimento, podendo contar com seus diplomas internacionais como mestrados, doutorados e pós-graduações.
                        </Text>
                    </Box>
                </Box>

                <Box mt="100px">
                    {professores.map((professor, index) => (
                        <ProfessorCard
                            key={index}
                            nome={professor.nome}
                            lattes={professor.lattes}
                            img={professor.img}
                            areas={professor.areas}
                        />
                    ))}
                </Box>
            </Box>
        </>
    );
}

export default Professores;

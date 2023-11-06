import React from "react";
import { Box, Center, Heading, Text } from "@chakra-ui/react";
import Title from "../../components/Title";
import ImageCard from "./ImageCard";
import Map from "./Map";
import Intership from "./Intership";
import MyComponent from "./MyComponent";

export default function VidaCampus() {
    const title = "Guia para Ingressantes";
    const subtitle = "Chegou no campus e se sentiu perdido ? A CDI te ajuda !";

    return (
        <>
            <Title title={title} subtitle={subtitle} />
            <Box bg="white"
                w={{ base: "100%" }}
                mx="auto"
                p={4}
                textAlign="center"
                borderRadius="10px"
            >
                <Heading color="#4330EC" mb="20px" fontFamily="heading" fontWeight="bold" fontSize="40px">
                    Mapa do Campus
                </Heading>
                <Box>
                    <Map
                        imageSrc='/campuslife/img/Pinguim.jpeg'
                        altText="Descrição da Imagem"
                        description=""
                        contentImg='/campuslife/img/mapa-campus.png'
                    />
                    <Box>
                        <ImageCard />
                    </Box>
                    <Box>
                        <Intership
                            imageSrc='/campuslife/img/Pinguim.jpeg'
                            altText="Descrição da Imagem"
                            description="Estágio e Vagas"
                        />
                    </Box>
                    <Box>
                        <Intership
                            description="Grupos de matérias  WhatsApp"
                        />
                    </Box>
                    <MyComponent/>
                </Box>
            </Box>
        </>
    )
}

import React from "react";
import { Box, Center, Heading, Text } from "@chakra-ui/react";
import Title from "../../components/Title";
import Card from "./VidaCampusCard";
import VideoCard from "./VideoCard";
import ImageCard from "./ImageCard";

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
                    Bandeco
                </Heading>
                <Box>
                    <Text fontFamily="body" fontWeight="light" color="#7305FF" fontSize="25px">
                        Vulgo Bandejão
                    </Text>
                </Box>
                <Box>
                    <Card
                        imageSrc='/campuslife/img/Pinguim.jpeg'
                        altText="Descrição da Imagem"
                        description=""
                    />
                    <Box>
                        <ImageCard/>
                    </Box>
                    <Box> 
                        <VideoCard
                        />
                    </Box>
                </Box>
            </Box>
        </>
    )
}

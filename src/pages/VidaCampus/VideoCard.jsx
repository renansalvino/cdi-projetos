import React from "react";
import { Box, Heading, Text, Center } from "@chakra-ui/react";

const VideoCard = () => {
  return (
    <Center my="100px">
      <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden" textAlign="center">
        <Box p="6">
          <Heading as="h2" fontSize="xl" mb="2" color="#0002FE">
            Dia a Dia de um Unicamper
          </Heading>
          {/* Inserir aqui o vídeo (iframe, embed, etc.) */}
          <iframe
            width="100%"
            height="315"
            src="https://www.youtube.com/watch?v=JB4-03H9ioU&ab_channel=JoutJoutPrazer"
            title="YouTube video player"
            allowFullScreen
          ></iframe>
        </Box>
      </Box>
    </Center>
  );
};

export default VideoCard;

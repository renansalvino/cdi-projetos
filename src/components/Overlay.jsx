import React from 'react';
import { Box } from '@chakra-ui/react';

export default function Overlay(){
    return (
        <Box>
            <Box
                position="fixed"
                zIndex="overlay"
                h="80vh"
                top={0}
                left={0}
                right={0}
                bottom="40vh"
                bg="whiteAlpha.300"
                borderBottomRadius="100%"
            />
        </Box>
    );
};

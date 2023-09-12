import { Box, ButtonGroup, Container, IconButton, Image, Stack, Text } from '@chakra-ui/react'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'


export default function Footer() {
    return (
        <Box w="100%" pt={{ base: '8', md: '6' }} px={{base: '40px', md:'60px', lg:'80px'}}  bgColor="#eee" borderTopRadius="10%">
            <Stack spacing={{ base: '5', md: '4' }}>
                <Stack justify="space-between" direction="row" align="center">
                    <Image src="./img/logo.jpg" alt='CDI' w="80px" ></Image>
                    <ButtonGroup variant="tertiary">
                        <IconButton as="a" href="#" aria-label="LinkedIn" icon={<FaLinkedin />} />
                        <IconButton as="a" href="#" aria-label="GitHub" icon={<FaGithub />} />
                        <IconButton as="a" href="#" aria-label="Twitter" icon={<FaTwitter />} />
                    </ButtonGroup>
                </Stack>
                <Text fontSize="sm" color="fg.subtle">
                    &copy; {new Date().getFullYear()} Chakra UI Pro, Inc. All rights reserved.
                </Text>
            </Stack>
        </Box>
    )
}
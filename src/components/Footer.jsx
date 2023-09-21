import { EmailIcon } from '@chakra-ui/icons'
import { Box, ButtonGroup, IconButton, Image, Stack, Text } from '@chakra-ui/react'
import {  FaInstagram, FaLinkedin } from 'react-icons/fa'

export default function Footer() {
    return (
        <Box
            w="100%"
            bgColor="#010101"
            position=""
            bottom="0" 
            py={{ base: '8', md: '6' }}
            px={{ base: '40px', md: '60px', lg: '80px' }}
        >
            <Stack spacing={{ base: '5', md: '4' }}>
                <Stack justify="space-between" direction="row" align="center">
                    <Image src="/img/logo.png" color="white" alt='CDI' w="80px" />
                    <ButtonGroup variant="tertiary" color="white">
                        <Stack color="white">
                            <Text fontWeight="bold" fontSize="2xl" ml={{base: '3'}}> CONTATE-NOS </Text>
                            <Text><IconButton as="a" href="#" aria-label="LinkedIn" icon={<FaInstagram />} />@cdi.unicamp </Text> 
                            <Text><IconButton as="a" href="#" aria-label="GitHub" icon={<EmailIcon />} />comissao.informatica.ft@gmail.com</Text>
                            <Text><IconButton as="a" href="#" aria-label="Twitter" icon={<FaLinkedin />} />CDI-FT Unicamp</Text>
                        </Stack>

                    </ButtonGroup>
                </Stack>
            </Stack>
        </Box>
    )
}

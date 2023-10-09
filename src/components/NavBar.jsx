import { Flex, HStack, Spacer, Image, Text } from '@chakra-ui/react'
import React from 'react'
import { NavLink } from 'react-router-dom'

export default function NavBar() {

    return (
        <Flex as="nav" zIndex="overlay" px="50px" mb="20px" pt="10px" alignItems="top" gap="30px" color="white" bg="rgba(255, 255, 255, 0.01)">
            <NavLink to="/Home">
                <Image src="/img/logo.png" alt='CDI' w="80px" />
            </NavLink>
            <Spacer />
            <HStack spacing="40px" color="white" fontWeight="bold">
                <NavLink to="/SobreNos">
                    <Text
                        fontFamily="Roboto, sans-serif"
                        fontSize="15px"
                        fontWeight="500"
                        lineHeight="18px"
                        letterSpacing="0"
                        textAlign="left" color="white"
                    >
                        Sobre Nós
                    </Text>
                </NavLink>
                <NavLink to="/Eventos">
                <Text
                        fontFamily="Roboto, sans-serif"
                        fontSize="15px"
                        fontWeight="500"
                        lineHeight="18px"
                        letterSpacing="0"
                        textAlign="left"
                        color="white"
                    >
                        Eventos
                    </Text>
                </NavLink>
                <NavLink to="/Professores">
                <Text
                        fontFamily="Roboto, sans-serif"
                        fontSize="15px"
                        fontWeight="500"
                        lineHeight="18px"
                        letterSpacing="0"
                        textAlign="left" color="white"
                    >
                        Professores
                    </Text>
                </NavLink>
                <NavLink to="/Guia">
                    <Text
                        fontFamily="Roboto, sans-serif"
                        fontSize="15px"
                        fontWeight="500"
                        lineHeight="18px"
                        letterSpacing="0"
                        textAlign="left" color="white"
                    >
                        Guia para Ingressantes
                    </Text>
                </NavLink>
                <NavLink to="/VidaNoCampus">
                    <Text
                        fontFamily="Roboto, sans-serif"
                        fontSize="15px"
                        fontWeight="500"
                        lineHeight="18px"
                        letterSpacing="0"
                        textAlign="left" color="white"
                    >
                        Vida No Campus
                    </Text>
                </NavLink>
                <NavLink to="/Contato">
                    <Text
                        fontFamily="Roboto, sans-serif"
                        fontSize="15px"
                        fontWeight="500"
                        lineHeight="18px"
                        letterSpacing="0"
                        textAlign="left" color="white"
                    >
                        Contato
                    </Text>
                </NavLink>
            </HStack>
        </Flex>
    )
}

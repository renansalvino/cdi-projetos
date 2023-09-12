import { Flex, HStack, Spacer, Image } from '@chakra-ui/react'
import React from 'react'
import { NavLink } from 'react-router-dom'

export default function NavBar() {

    return (
        <Flex as="nav" zIndex="overlay" p="50px" alignItems="top" gap="30px" color="white" bg="rgba(255, 255, 255, 0.01)">
            <NavLink to="/Home">
                <Image src="./img/logo.png" alt='CDI' w="80px" />
            </NavLink>
            <Spacer />
            <HStack spacing="40px" color="gray.100" fontWeight="bold">
                <NavLink to="/SobreNos">
                    Sobre Nós
                </NavLink>
                <NavLink to="/Membros">
                    Membros
                </NavLink>
                <NavLink to="/NossasIniciativas">
                    Nossas Iniciativas
                </NavLink>
                <NavLink to="/CDIHelpDesk">
                    CDI HelpDesk
                </NavLink>
                <NavLink to="/Patrocinador">
                    Patrocinador
                </NavLink>
                <NavLink to="/Eventos">
                    Eventos
                </NavLink>
                <NavLink to="/Guia">
                    Guia
                </NavLink>
                <NavLink to="/VidaNoCampus">
                    Vida No Campus
                </NavLink>
                <NavLink to="/Contato">
                    Contato
                </NavLink>
            </HStack>
        </Flex>
    )
}

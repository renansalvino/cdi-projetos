import React from 'react'
import Title from '../../components/Title'
import { Box, Grid, GridItem, Heading, Text } from '@chakra-ui/react'
import './styles.css';


export default function Eventos() {
    const title = "Eventos"
    const subtitle = "Fique por dentro dos principais eventos da FT!"

    return (
        <>
            <Title title={title} subtitle={subtitle} />
            <Box style={{ paddingInline: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#fff', maxWidth: '100%' }}>
                <Grid templateColumns='repeat(6, 1fr)' gap={6}>
                    <GridItem w='100%' colSpan={6} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <Text style={{ marginBottom: '30px', fontSize: '55px', color: '#4330EC', fontWeight: 'bold' }}>
                            Eventos já realizados
                        </Text>
                    </GridItem>
                    <GridItem w='100%' colSpan={6} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <Text style={{ margin: '30px', fontSize: '18px', textAlign: 'center', color: '#0002FE', fontWeight: 'bold' }}>
                            A CDI é campeã em proporcionar experiências ÚNICAS e TRANSFORMADORAS.
                            Acreditamos no poder da vivência acima de tudo e por isso sempre nos preocupamos em preparar
                            atividades imersivas aos alunos.
                        </Text>
                    </GridItem>
                    <GridItem colSpan={6}>

                        <Box display="flex" justifyContent="space-between">
                            <Box
                                width="234px"
                                height="231px"
                                backgroundColor="#D9D9D9"
                                position="relative"
                                marginBottom="5px"
                            >
                                <Box position="absolute" top="50%" left="0" transform="translateY(-50%)">
                                    <span>&#8656;</span>
                                </Box>
                            </Box>
                            <Box
                                width="234px"
                                height="231px"
                                backgroundColor="#D9D9D9"
                                position="relative"
                                marginBottom="5px"
                            ></Box>
                            <Box
                                width="234px"
                                height="231px"
                                backgroundColor="#D9D9D9"
                                position="relative"
                                marginBottom="5px"
                            ></Box>
                            <Box
                                width="234px"
                                height="231px"
                                backgroundColor="#D9D9D9"
                                position="relative"
                                marginBottom="5px"
                            >
                                <Box position="absolute" top="50%" right="0" transform="translateY(-50%)">
                                    <span>&#8658;</span>
                                </Box>
                            </Box>
                        </Box>
                    </GridItem>
                    <GridItem colSpan={6}>
                        <Box className="event-section">
                            <Box className="event-container">
                                <Box className="event-header">
                                    <Heading as="h2" marginBottom="10px">
                                        Mural de eventos
                                    </Heading>
                                    <Text>Acompanhe o nosso mural para ficar por dentro dos próximos eventos que ocorrerão.</Text>
                                    <br />
                                    <Box
                                        width="700px"
                                        height="200px"
                                        backgroundColor="#ffffff"
                                        position="relative"
                                        marginBottom="20px"
                                    >
                                        <Text position="absolute" top="20px" left="20px">
                                            Nome do evento:
                                        </Text>
                                        <Text position="absolute" top="50px" left="20px">
                                            Data:
                                        </Text>
                                        <Text position="absolute" top="80px" left="20px">
                                            Hora:
                                        </Text>
                                        <Text position="absolute" top="110px" left="20px">
                                            Link para inscrição:
                                        </Text>
                                        <Box
                                            position="absolute"
                                            top="50px"
                                            right="50px"
                                            width="80px"
                                            height="80px"
                                            backgroundColor="#D9D9D9"
                                            borderRadius="50%"
                                        ></Box>
                                        <br />
                                    </Box>

                                    <Box
                                        width="700px"
                                        height="200px"
                                        backgroundColor="#ffffff"
                                        position="relative"
                                        marginBottom="20px"
                                    >
                                        <Text position="absolute" top="20px" left="20px">
                                            Nome do evento:
                                        </Text>
                                        <Text position="absolute" top="50px" left="20px">
                                            Data:
                                        </Text>
                                        <Text position="absolute" top="80px" left="20px">
                                            Hora:
                                        </Text>
                                        <Text position="absolute" top="110px" left="20px">
                                            Link para inscrição:
                                        </Text>
                                        <Box
                                            position="absolute"
                                            top="50px"
                                            right="50px"
                                            width="80px"
                                            height="80px"
                                            backgroundColor="#D9D9D9"
                                            borderRadius="50%"
                                        ></Box>
                                    </Box>

                                    <Box
                                        width="700px"
                                        height="200px"
                                        backgroundColor="#ffffff"
                                        position="relative"
                                        marginBottom="20px"
                                    >
                                        <Text position="absolute" top="20px" left="20px">
                                            Nome do evento:
                                        </Text>
                                        <Text position="absolute" top="50px" left="20px">
                                            Data:
                                        </Text>
                                        <Text position="absolute" top="80px" left="20px">
                                            Hora:
                                        </Text>
                                        <Text position="absolute" top="110px" left="20px">
                                            Link para inscrição:
                                        </Text>
                                        <Box
                                            position="absolute"
                                            top="50px"
                                            right="50px"
                                            width="80px"
                                            height="80px"
                                            backgroundColor="#D9D9D9"
                                            borderRadius="50%"
                                        ></Box>
                                        <br />
                                    </Box>

                                    <Box
                                        width="700px"
                                        height="200px"
                                        backgroundColor="#ffffff"
                                        position="relative"
                                        marginBottom="20px"
                                    >
                                        <Text position="absolute" top="20px" left="20px">
                                            Nome do evento:
                                        </Text>
                                        <Text position="absolute" top="50px" left="20px">
                                            Data:
                                        </Text>
                                        <Text position="absolute" top="80px" left="20px">
                                            Hora:
                                        </Text>
                                        <Text position="absolute" top="110px" left="20px">
                                            Link para inscrição:
                                        </Text>
                                        <Box
                                            position="absolute"
                                            top="50px"
                                            right="50px"
                                            width="80px"
                                            height="80px"
                                            backgroundColor="#D9D9D9"
                                            borderRadius="50%"
                                        ></Box>
                                        <br />
                                    </Box>
                                </Box>
                            </Box>
                        </Box>;

                    </GridItem>
                </Grid>
            </Box>

        </>
    )
}
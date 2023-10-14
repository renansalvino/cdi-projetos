import NavBar from "../components/NavBar"
import Footer from "../components/Footer"
import { Grid, GridItem, Box } from "@chakra-ui/react"
import { Routes, Route } from 'react-router-dom';
import Home from "../pages/Home";
import SobreNos from "../pages/SobreNos";
import Membros from "../pages/Membros";
import NossasIniciativas from "../pages/NossasIniciativas";
import CDIHelpDesk from "../pages/CDIHelpDesk";
import Patrocinador from "../pages/Patrocinador";
import Eventos from "../pages/Eventos";
import Guia from "../pages/Guia";
import Contato from "../pages/Contato";
import VidaCampus from "../pages/VidaCampus";
import Professores from "../pages/Professores";


export default function RootLayout() {
  return (
    <>
      <Grid templateColumns="repeat(6, 1fr)">
        <GridItem as="main" colSpan={{ base: 6, lg: 6, xl: 6 }} bgGradient='linear(to-b, #472cfb, #ac79f2,#ac79f2, #ac79f2)'>
          <NavBar />
          <Box w='100%' h='100%' minH="100vh">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route element={< Home />} path="/Home"></Route>
              <Route element={< SobreNos />} path="/SobreNos"></Route>
              <Route element={< Membros />} path="/Membros"></Route>
              <Route element={< NossasIniciativas />} path="/NossasIniciativas"></Route>
              <Route element={< CDIHelpDesk />} path="/CDIHelpDesk"></Route>
              <Route element={< Patrocinador />} path="/Patrocinador"></Route>
              <Route element={< Eventos />} path="/Eventos"></Route>
              <Route element={< Guia />} path="/Guia"></Route>
              <Route element={< Contato />} path="/Contato"></Route>
              <Route element={< VidaCampus />} path="/VidaNoCampus"></Route>
              <Route element={< Professores />} path="/Professores"></Route>
            </Routes>
          </Box>
        </GridItem>
      </Grid>
      <Footer />
    </>
  );
}


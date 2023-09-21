import { Outlet } from "react-router-dom"
import NavBar from "../components/NavBar"
import Footer from "../components/Footer"
import { Grid, GridItem, Box } from "@chakra-ui/react"
import Title from "../components/Title"

export default function RootLayout() {
  return (
    <>
      <Grid templateColumns="repeat(6, 1fr)">
        <GridItem as="main" colSpan={{ base: 6, lg: 6, xl: 6 }} bgGradient='linear(to-b, #1405FF, #ac79f2,#ac79f2, #ac79f2)'>
          <NavBar />
          <Box w='100vw' h='100%' minH="100vh" >
            <Title />
            <Outlet />
          </Box>
        </GridItem>
      </Grid>
      <Footer />
    </>
  )
}

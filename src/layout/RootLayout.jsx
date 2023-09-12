import { Outlet } from "react-router-dom"
import NavBar from "../components/NavBar"
import Footer from "../components/Footer"
import {  Grid, GridItem, Box } from "@chakra-ui/react"
import Overlay from "../components/Overlay"

export default function RootLayout() {
  return (
    <Grid templateColumns="repeat(6, 1fr)">
      <GridItem as="main" colSpan={{ base: 6, lg: 6, xl: 6 }} bgGradient='linear(to-b, #1405FF, #7305ff, #7305ff)'>
        <NavBar />
        <Box w='100vw' h='100vh' >
          <Outlet />
        </Box>
        <Footer w="100vw" />
      </GridItem>
    </Grid>
  )
}

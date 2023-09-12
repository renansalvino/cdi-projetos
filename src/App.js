import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from 'react-router-dom'

// layouts and pages
import RootLayout from './layout/RootLayout'
import Home from './pages/Home/index'
import SobreNos from './pages/SobreNos/index'
import Membros from './pages/Membros/index'
import NossasIniciativas from './pages/NossasIniciativas/index'
import CDIHelpDesk from './pages/CDIHelpDesk/index'
import Patrocinador from './pages/Patrocinador/index'
import Contato from './pages/Contato/index'
import Eventos from './pages/Eventos/index'
import Guia from './pages/Guia/index'
import VidaCampus from './pages/VidaCampus/index'

// router and routes
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route element = {< Home />}  path="/Home"></Route>
      <Route element = {< SobreNos />}  path="/SobreNos"></Route>
      <Route element = {< Membros />}  path="/Membros"></Route>
      <Route element = {< NossasIniciativas />}  path="/NossasIniciativas"></Route>
      <Route element = {< CDIHelpDesk />}  path="/CDIHelpDesk"></Route>
      <Route element = {< Patrocinador />}  path="/Patrocinador"></Route>
      <Route element = {< Eventos />}  path="/Eventos"></Route>
      <Route element = {< Guia />}  path="/Guia"></Route>
      <Route element = {< Contato />}  path="/Contato"></Route>
      <Route element = {< VidaCampus />}  path="/VidaNoCampus"></Route>
    </Route>
  )
)

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App

import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Home from './Home';
import SobreNos from './pages/SobreNos';
import Membros from './pages/Membros';
import NossasIniciativas from './pages/NossasIniciativas';
import CDIHelpDesk from './pages/CDIHelpDesk';
import Patrocinador from './pages/Patrocinador';
import Contato from './pages/Contato';

export default function App() {
   return (
    <Routes>
      <Route element = {< Home />}  path="/"></Route>
      <Route element = {< SobreNos />}  path="/sobre-nos"></Route>
      <Route element = {< Membros />}  path="/membros"></Route>
      <Route element = {< NossasIniciativas />}  path="/nossas-iniciativas"></Route>
      <Route element = {< CDIHelpDesk />}  path="/cdi-help-desk"></Route>
      <Route element = {< Patrocinador />}  path="/patrocinador"></Route>
      <Route element = {< Contato />}  path="/contato"></Route>
    </Routes>
   );
}
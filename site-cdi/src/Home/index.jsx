import React from 'react';
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <nav>
        <ul>
          <li> 
            <Link to="/"> Home </Link> 
          </li>
          <li> 
            <Link to="/sobre-nos"> Sobre Nós </Link> 
          </li>
          <li> 
            <Link to="/membros"> Membros </Link> 
          </li>
          <li> 
            <Link to="/nossas-iniciativas"> Nossas iniciativas </Link>
          </li>
          <li> 
            <Link to="/cdi-help-desk"> CDI Help Desk </Link> 
          </li>
          <li>  
            <Link to="/patrocinador"> Patrocinador </Link>  
          </li>
          <li>  
            <Link to="/contato"> Contato </Link>  
          </li>
        </ul>
      </nav>
  </div>
  );
}

export default Home;
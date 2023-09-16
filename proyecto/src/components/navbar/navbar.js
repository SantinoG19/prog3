import React from "react";
import { Link } from "react-router-dom";
import Buscador from "../ResutadosBusqueda/ResultadosBusqueda";

function Navbar() {
    return(
    
        <React.Fragment>
            <header className="header">
        <div className="contenedor">
            
        <Link to='/' className= "logo"> FLIXER  </Link>
        <Buscador/>
            
       
              
            <nav>
                <Link to='/'> HOME  </Link>
        //      <Link to='/favoritos'> FAVORITOS </Link>
                <Link to='/top_rated'> TOP RATED  </Link>
        //      <Link to='/popular'> POPULAR </Link>
        //      
            </nav>
        </div>
    </header>
        </React.Fragment>
    );   
}


export default Navbar
import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
    return(
    
        <React.Fragment>
            <header className="header">
        <div className="contenedor">
            
        <Link to='/' className= "logo"> FLIXER  </Link>
            <div id='search-box'>
                <form action='./ResultadoBusqueda' id='search-form' method='get' target='_top'>
                <input id='search-text' name='search' placeholder='Busca en Flixer' type='text'/>
                <button id='search-button' type='submit'> Busca</button>
                
                </form>
                </div>
              
            <nav>
                <Link to='/'> HOME  </Link>
        //      <Link to='/favoritos'> FAVORITOS </Link>
        //      
            </nav>
        </div>
    </header>
        </React.Fragment>
    );   
}


export default Navbar
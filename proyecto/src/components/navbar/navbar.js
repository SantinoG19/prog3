import React from "react";

function Navbar() {
    return(
        <React.Fragment>
            <header>
        <div className="contenedor">
            
            <a href="./index.html"  className="logo">FLIXER </a>
            <div id='search-box'>
                <form action='./search-result.html' id='search-form' method='get' target='_top'>
                <input id='search-text' name='search' placeholder='Busca en Flixer' type='text'/>
                <button id='search-button' type='submit'> Busca</button>
                
                </form>
                </div>
              
            <nav>
                <a  href="./index.html">Inicio</a>
                <a href="./favoritos.html">Favoritos</a>
                <a href="./generos.html">Generos</a>
            </nav>
        </div>
    </header>
        </React.Fragment>
    );   
}





export default Navbar
import React from "react";

function Navbar() {
    return(
        <React.Fragment>
            <header className="header">
        <div className="contenedor">
            
            <h1><a href="./index.html"  className="logo">FLIXER </a></h1>
            <div id='search-box'>
                <form action='./search-result.html' id='search-form' method='get' target='_top'>
                <input id='search-text' name='search' placeholder='Busca en Flixer' type='text'/>
                <button id='search-button' type='submit'> Busca</button>
                
                </form>
                </div>
              
            <nav>
                <a  href="./index.html">HOME</a>
                <a href="./favoritos.html">FAVORITOS</a>
                <a href="./generos.html">VER TODAS</a>
            </nav>
        </div>
    </header>
        </React.Fragment>
    );   
}





export default Navbar
import React from "react";
import "../NoEncontrada/NoEncontrada.css"

function NoEncontrada() {
    return(
        <React.Fragment>
           <div>

                <h1 className="error">
                    Error 404 Not Found
                    
                    <a class="volver" href="/">VOLVER A HOME</a>

                 </h1>
                

                

                </div>

        </React.Fragment>
    );   
}


export default NoEncontrada
import React, { Component } from "react";


class VerTodas extends Component {
  constructor() {
    super();
    this.state = {
      favoritos: [],
    };
  }

  render() {
    console.log(this.state.favoritos);
    return (
      <React.Fragment>
        
        <div>
          <h1 style={{color: "white"}}>PAGINA CON TODAS LAS PELICULAS</h1>
        </div>
      
      </React.Fragment>
    );
  }
  x;
}




export default VerTodas
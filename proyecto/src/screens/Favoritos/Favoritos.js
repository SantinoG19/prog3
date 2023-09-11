import React, { Component } from "react";


class Favoritos extends Component {
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
          <h1 style={{color: "white"}}>Pagina de favoritos</h1>
        </div>
      
      </React.Fragment>
    );
  }
  
}




export default Favoritos
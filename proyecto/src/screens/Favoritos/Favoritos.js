import React, { Component } from "react";


class Favoritos extends Component {
  constructor() {
    super();
    this.state = {
      pelis: [],
      series:[]
    };
  }
  componentDidMount(){
    let Movie = []
    let guardados = localStorage.getItem('favoritos');

    // Check if 'guardados' is not null and parse 'Movie'
let favoritos = [];
if (guardados !== null) {
   favoritos = JSON.parse(guardados);
}

fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=ba0b591fbb4dcbf21e7a279fceca5d5e&language=en-US&page=1`)
.then((response) => response.json())
.then((data) => {
   let pelis = data.results.filter((contenido) => {
      return favoritos.includes(contenido.id);
   });
   this.setState({
      pelis: pelis
   });
})
.catch((error) => console.log(error));

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
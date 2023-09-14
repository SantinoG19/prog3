import React, { Component } from "react";
import './VerTodas.css'
import CardsContainer from "../../components/CardConteiner/CardComteiner"

class TodoTopRated extends Component {
    constructor(props) {
      super(props);
      this.state = {
        top_rated:[],
        paginas: 2
      };
    }

componentDidMount() {
    let endpoint = this.props.match.params.category;
    fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=ba0b591fbb4dcbf21e7a279fceca5d5e&language=en-US&page=1`)
    .then((response) => response.json())
    .then((data) =>{
        this.setState({
          top_rated : data.results
        })
    })
    .catch((error) => console.log("El error es: " + error));
}

mostrarMasPeliculas() {
    let paginasNumero = this.state.paginas;

    fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=ba0b591fbb4dcbf21e7a279fceca5d5e&language=en-US&page=${paginasNumero}`)
      .then((res) => res.json())
      .then((data) =>
        this.setState({
          top_rated: data.results.concat(this.state.top_rated),
          page: paginasNumero + 1,
        })
      )
      .catch((error) => console.log("El error es: " + error));
  }
  

  render() {
    console.log(this.state.top_rated);
    return(
      <React.Fragment>
       <h1 class="maintitulos">VER TODAS LAS PELICULAS TOP RATED:</h1>
        {this.state.top_rated.length > 0 ?
            <main>
            <button onClick={() => this.mostrarMasPeliculas()}> Mas Peliculas </button>
            <CardsContainer verMasPelis={this.state.top_rated} /> 
            </main>
        :
        <h3>Cargando ...</h3>}
       
        
      </React.Fragment>
    )
  }
}

export default TodoTopRated;
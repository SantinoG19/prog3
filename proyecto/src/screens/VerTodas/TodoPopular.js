import React, { Component } from "react";
import './VerTodas.css'
import CardsContainer from "../../components/CardConteiner/CardComteiner"

class TodoPopular extends Component {
    constructor(props) {
      super(props);
      this.state = {
        popular:[],
        paginas: 2
      };
    }

componentDidMount() {
    let endpoint = this.props.match.params.category;
    fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=ba0b591fbb4dcbf21e7a279fceca5d5e&language=en-US&page=1`)
    .then((response) => response.json())
    .then((data) =>{
        this.setState({
            popular : data.results
        })
    })
    .catch((error) => console.log("El error es: " + error));
}

mostrarMasSeries() {
    let paginasNumero = this.state.paginas;

    fetch(`https://api.themoviedb.org/3/tv/popular?api_key=a3c55e0abc72e6abaa573f83ee40635f&language=en-US&page=${paginasNumero}`)
      .then((res) => res.json())
      .then((data) =>
        this.setState({
          popular: data.results.concat(this.state.popular),
          page: paginasNumero + 1,
        })
      )
      .catch((error) => console.log("El error es: " + error));
  }
  

  render() {
    console.log(this.state.popular);
    return(
      <React.Fragment>
       <h1 class="maintitulos">VER TODAS LAS SERIES POPUARES:</h1>
        {this.state.popular.length > 0 ?
            <main>
            <button onClick={() => this.mostrarMasSeries()}> Mas Series </button>
            <CardsContainer verMasSeries={this.state.popular} /> 
            </main>
        :
        <h3>Cargando ...</h3>}
       
        
      </React.Fragment>
    )
  }
}

export default TodoPopular;
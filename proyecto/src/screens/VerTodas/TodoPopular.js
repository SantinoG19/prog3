import React, { Component } from "react";
import './VerTodas.css'
import CardsContainer from "../../components/CardConteiner/CardComteiner"
import Loader from "../../components/Loader/Loader";
import Filtro from "../../components/Filtro/Filtro";

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
    fetch(`https://api.themoviedb.org/3/tv/popular?api_key=ba0b591fbb4dcbf21e7a279fceca5d5e&language=en-US&page=1`)
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

    fetch(`https://api.themoviedb.org/3/tv/popular?api_key=ba0b591fbb4dcbf21e7a279fceca5d5e&language=en-US&page=${paginasNumero}`)
      .then((res) => res.json())
      .then((data) =>
        this.setState({
          popular: data.results.concat(this.state.popular),
          page: paginasNumero + 1,
        })
      )
      .catch((error) => console.log("El error es: " + error));
  }
  filtrarPelis(texto){
    let arrayfil =this.state.popular.filter((populars)=>{
      return populars.name.toLowerCase().includes(texto.toLowerCase());
      
    });
    this.setState({
      popular:arrayfil
    })
  }
  
  

  render() {
    console.log(this.state.popular);
    return(
      <React.Fragment>
       <h1 class="maintitulos">VER TODAS LAS SERIES POPULARES:</h1>

        
            <main>
            <button onClick={() => this.mostrarMasSeries()}> Mas Series </button>
             <Filtro filtracion={(texto)=>this.filtrarPelis(texto)}/>
            
            <CardsContainer verMasSeries={this.state.popular} /> 
            </main>
        
         
       
        
      </React.Fragment>
    )
  }
}

export default TodoPopular
import React, { Component } from "react";
import "./Home.css"
import CardsContainer from "../../components/CardConteiner/CardComteiner"
import Filtro from "../../components/Filtro/Filtro";
import Buscador from "../../components/ResutadosBusqueda/ResultadosBusqueda";
import Loader from "../../components/Loader/Loader";
import { Link } from "react-router-dom";

const endpointsPelis = ['top_rated'];
const endpointsSeries = ['popular']
class Home extends Component {
  constructor() {
    super();
    this.state = {
      top_rated:[],
      popular: []

    };
  }
                      
  componentDidMount() {
    endpointsPelis.map((endpoint, i) => {
      fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=ba0b591fbb4dcbf21e7a279fceca5d5e&language=en-US&page=1`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        {
          this.setState({
            top_rated : data.results,
        
          })
        } 
      }
      )
      .catch((error) => console.log(error));
    })
    endpointsSeries.map((endpoint, i) => {
      fetch(`https://api.themoviedb.org/3/tv/popular?api_key=ba0b591fbb4dcbf21e7a279fceca5d5e&language=en-US&page=1`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        {
          this.setState({
            popular : data.results,
        
          })
        } 
      }
      )
      .catch((error) => console.log("El error es: " + error));
    })
  }

  

  render() {
    return(

        <main>
      
          
          
               <Link to={`/top_rated`} className="maintitulos"><u>LAS PELICULAS MAS POPULARES -- VER TODO</u></Link>
        {this.state.top_rated.length > 0 ? <CardsContainer infoPeli={this.state.top_rated}/> : <Loader/>  }

        
         <Link to={`/popular`}><p className="maintitulos"> <u>LAS SERIES MAS POPULARES -- VER TODO</u></p></Link>
        {this.state.top_rated.length > 0 ? <CardsContainer informacionSerie={this.state.popular}/> : <Loader/>  }
        
    
        </main>

    ) 
  }
}

export default Home;

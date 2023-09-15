import React, { Component } from "react";
import "./Home.css"
import CardsContainer from "../../components/CardConteiner/CardComteiner"
import Filtro from "../../components/Filtro/Filtro";
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
    
          
          <h1 class="maintitulos"> LAS PELICULAS MAS POPULARES </h1>
          <Filtro/>     <Link to={`/top_rated`} className="vertodo"><u>Ver todo</u></Link>
        {this.state.top_rated.length > 0 ? <CardsContainer infoPeli={this.state.top_rated}/> : <h3>...</h3> }

        <h1 class="maintitulos"> LAS SERIES MAS POPULARES</h1> 
        <Filtro/> <Link to={`/popular`}><p className="vertodoSerie"> <u>Ver todo</u></p></Link>
        {this.state.top_rated.length > 0 ? <CardsContainer informacionSerie={this.state.popular}/> : <h3>...</h3> }
        
    
        </main>

    ) 
  }
}

export default Home;

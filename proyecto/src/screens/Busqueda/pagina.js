import React, { Component } from "react";
import "../Home/Home.css"
import CardsContainer from "../../components/CardConteiner/CardComteiner"
import Loader from "../../components/Loader/Loader";

class PaginaBusqueda extends Component {
    constructor(props) {
      super(props);
      this.state = {
          input:[]
      };
    }
  
    componentDidMount() {
      fetch(`https://api.themoviedb.org/3/search/movie?query=${this.props.match.params.query}&api_key=ba0b591fbb4dcbf21e7a279fceca5d5e&language=en-US&page=1&include_adult=false`)
              .then(response => response.json())
              .then(data => this.setState(
                  { input: data.results }
              ))
              .catch(e => console.log(e))
    }
    
  
    render() {
      {console.log(this.state.input);}
      return(
          <main>
            <div>
              <h2 className="maintitulos">Resultados de: '{this.props.match.params.query}' </h2>
                {this.state.input.length > 0 ? <CardsContainer infoPeli={this.state.input}/> : <Loader/> }
            </div>
          </main>
  
      ) 
    }
  }
  
  export default PaginaBusqueda;


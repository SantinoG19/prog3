import React, { Component } from 'react';
import { Link } from "react-router-dom";
import "./ResultadosBusqueda.css"

class Buscador extends Component{

    constructor(props){
        super(props);
        this.state ={
            buscar: ''
        }
    }

    prevenirEnvio(evento){
        evento.preventDefault();
    }

    guardarInput(evento){
        this.setState({
            texto: evento.target.value
        })
        
    }

    render(){
        return(
              <div className="search-box">
              <form className="search-form"  method="GET" onSubmit={(evento) => this.prevenirEnvio(evento)}>
                  <input className="search-text" type="text" name="search" placeholder="Busca en Flixer" onChange={(evento)=>this.guardarInput(evento)} value={this.state.texto}/> 
                  <Link to ={`/ResultadoBusqueda/${this.state.texto}`}> <button className="search-button" type="submit">Search</button> </Link>
              </form>
          </div>
        )
    }

}

export default Buscador
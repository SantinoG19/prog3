import React, { Component } from 'react';
import { Link } from "react-router-dom";

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
              <div className="">
              <form className=""  method="GET" onSubmit={(evento) => this.prevenirEnvio(evento)}>
                  <input className="" type="text" name="Search" placeholder="Ingrese lo que desea buscar" onChange={(evento)=>this.guardarDatosDelInput(evento)} value={this.state.texto}/> 
                  <Link to ={`/ResultadoBusqueda/${this.state.texto}`}> <button className="" type="submit">Search</button> </Link>
              </form>
          </div>
        )
    }

}

export default Buscador
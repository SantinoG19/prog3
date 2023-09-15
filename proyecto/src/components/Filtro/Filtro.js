import React, { Component } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

class Filtro extends Component {

    constructor(){
        super();
        this.state={
            filtro:""
        }
    }

    controlarEnvio(evento){
        evento.preventDefault();
        console.log('Sin envio');
        return true
    }

    guardarDatosDelInput(eventoEnElInput){
        this.setState({
            filtro: eventoEnElInput.target.value
        }, () => console.log(this.state.filtro))


        return true
    }

    render(){
        return(
            <form action="" method='GET' onSubmit={(e) => this.controlarEnvio(e)}>
                <label htmlFor="">Texto a filtrar: </label>
                <input type="text" name='filtro' onChange={(e)=>this.guardarDatosDelInput(e)} value={this.state.filtro} />
                <Link to={`/ResultadoBusqueda/${this.state.filtro}`} ><button type='submit'>Filtrar</button></Link>
            </form>
        );
    }

}

export default Filtro
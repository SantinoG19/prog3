import React, { Component } from "react";

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
        }, () => this.props.filtrar(this.state.filtro))


        return true
    }

    render(){
        return(
            <form action="" method='GET' onSubmit={(e) => this.controlarEnvio(e)}>
                <label htmlFor="">Texto a filtrar: </label>
                <input type="text" name='filtro' onChange={(e)=>this.guardarDatosDelInput(e)} value={this.state.filtro} />
                <button type='submit'>Filtrar</button>
            </form>
        );
    }

}

export default Filtro
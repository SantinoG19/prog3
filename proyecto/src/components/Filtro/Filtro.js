import React, { Component } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import TodoPopular from "../../screens/VerTodas/TodoPopular";

class Filtro extends Component {

    constructor(props){
        super(props);
        this.state={
            filtro:""
        }
    }
    detenerDefault(evento) {
        evento.preventDefault();
      }
    
      guardarInput(evento) {
        this.setState(
          {
            filtro: evento.target.value,
          },
          () => this.props.filtracion(this.state.filtro)
        );
      }

    
      
        
    
      
    render(){
        console.log(this.props.filtracion)
        console.log(this.state.filtro)
        return(
            
            <form action="" method='GET' onSubmit={(evento) => this.detenerDefault(evento)}>
                <label htmlFor="">Texto a filtrar: </label>
                <input type="text" name='filtro' onChange={(evento)=>this.guardarInput(evento)} value={this.state.filtro} />
                <button type='submit'>Filtrar</button>
            </form>
        );
    }

}

export default Filtro
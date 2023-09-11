import React, {Component} from 'react';
import { Link } from "react-router-dom";

let img = 'https://image.tmdb.org/t/p/w500'

class CardSerie extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    };  render(){
      
        return (
            
            <article className='item-1'>
             
                
               
                <img className='a ' src= {img + this.props.contenidoSerie.poster_path}  alt={this.props.contenidoSerie.name}/>
              

                
              
               
              
            </article>
            
        )
    }
}
 export default CardSerie
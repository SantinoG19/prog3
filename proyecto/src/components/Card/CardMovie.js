import React, {Component} from 'react';
import { Link } from "react-router-dom";

let img = 'https://image.tmdb.org/t/p/w500'

class Card extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    };  render(){
      
        return (
            
            <article className='item-1'>
             
                
               
                <img className='a ' src= {img + this.props.contentPeli.poster_path}  alt={this.props.contentPeli.title}/>
                
                <button type='button' className='boton'>AGREGAR A FAVORITOS</button>

                
              
               
              
            </article>
            
        )
    }
}
 export default Card
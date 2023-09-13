import React, {Component} from 'react';
import { Link } from "react-router-dom";

let img = 'https://image.tmdb.org/t/p/w500'

class Card extends Component {
    constructor(props) {
        super(props);
        this.state = {
            favTexto:" Agregar a favoritos",
        }
    }; 

    componentDidMount(){
        let confir= localStorage.getItem('favoritos')

        if (confir !== null){
            let favoritos= JSON.parse(confir)
        
        
            if(favoritos.includes(this.props.contentPeli.id)){
                this.setState({
                    favTexto: 'Quitar de favoritos'

                })
            }}
    }
    
    modificarFav(id){

        let favoritos = []
        let confir= localStorage.getItem('favoritos')
        if (confir !== null){
            favoritos= JSON.parse(confir)
        }
        if(favoritos.includes(id)){
            favoritos=favoritos.filter(unId=> unId!== id)
            this.setState({
                favTexto: 'Agregar a Favoritos'
            })
          
            
        }else{
            favoritos.push(id)
            this.setState({
                favTexto: 'quitar de favoritos'
            })

        }

        


        let favString = JSON.stringify(favoritos)
        localStorage.setItem('favoritos', favString)

        
    }


    render(){
      
        return (
            
            <article className='item-1 titulo'>
             
                
               
                <img className='a ' src= {img + this.props.contentPeli.poster_path}  alt={this.props.contentPeli.title}/>
                <h3 className='margen'>{this.props.contentPeli.title}  </h3>
                
                <button onClick={()=> this.modificarFav(this.props.contentPeli.id)} type='button'>{this.state.favTexto}</button>
                

                
              
               
              
            </article>
            
        )
    }
}
 export default Card
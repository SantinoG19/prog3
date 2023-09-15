import React, {Component} from 'react';
import { Link } from "react-router-dom";

let img = 'https://image.tmdb.org/t/p/w500'

class Card extends Component {
    constructor(props) {
        super(props);
        this.state = {
            favTexto:" Agregar a favoritos",
            VerMasDescrip: "Ver Mas"
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

    botonVerMas(){
        if(this.state.descrip === false){
            this.setState({
                descrip:true,
                VerMasDescrip:"Ocultar"
            })
        }
        else{
            this.setState({
                descrip:false,
                VerMasDescrip:"Descripcion"
            })
        }
    }

    render(){
      
        return (
            
            <article className='item-1 titulo'>
             
                
                <Link to={`/DetallePeli/id/${this.props.contentPeli.id}`}>
                <img className='a ' src= {img + this.props.contentPeli.poster_path}  alt={this.props.contentPeli.title}/>
                </Link>
                <h3 className='margen'>{this.props.contentPeli.title}  </h3>
              
                <button className='boton' onClick={()=> this.modificarFav(this.props.contentPeli.id)} type='button'>{this.state.favTexto}</button>
                {this.state.descrip ?
                  <div>
                    <p className="descripVerMas">{this.props.contentPeli.overview}</p>
                  </div>
              : false}

                <button onClick={() => this.botonVerMas()} className="boton" >{this.state.VerMasDescrip}</button>

                

                
              
               
              
            </article>
            
        )
    }
}
 export default Card
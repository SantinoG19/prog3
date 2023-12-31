import React, {Component} from 'react';
import { Link } from "react-router-dom";

let img = 'https://image.tmdb.org/t/p/w500'

class CardSerie extends Component {
    constructor(props) {
        super(props);
        this.state = {
            favTexto:"Agregar a Favoritos",
            VerMasDescrip: "Ver Mas"
        }
    }; 
    componentDidMount(){
        let confir= localStorage.getItem('favoritosSerie')

        if (confir !== null){
            let favoritos= JSON.parse(confir)
        
        
            if(favoritos.includes(this.props.contenidoSerie.id)){
                this.setState({
                    favTexto: 'Quitar de favoritos'

                })
            }}
    }
    
    modificarFav(id){

        let favoritos = []
        let confir= localStorage.getItem('favoritosSerie')
        if (confir !== null){
            favoritos= JSON.parse(confir)
        }
        if(favoritos.includes(this.props.contenidoSerie.id)){
            favoritos=favoritos.filter(unId=> unId!== this.props.contenidoSerie.id)
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
        localStorage.setItem('favoritosSerie', favString)

        
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

                <Link to={`/DetalleSerie/id/${this.props.contenidoSerie.id}`}>
                <img className='a ' src= {img + this.props.contenidoSerie.poster_path}  alt={this.props.contenidoSerie.name}/>
                </Link>
             
                
                <h3 className='margen '>{this.props.contenidoSerie.name}  </h3>
               
            
                <button className='boton' onClick={()=> this.modificarFav(this.props.contenidoSerie.id)} type='button'>{this.state.favTexto}</button>
                {this.state.descrip ?
                  <div>
                    <p className="descripVerMasTv">{this.props.contenidoSerie.overview}</p>
                  </div>
              : false}

<button onClick={() => this.botonVerMas()} className="boton" >{this.state.VerMasDescrip}</button>
                
              

                
              
               
              
            </article>
            
        )
    }
}
 export default CardSerie
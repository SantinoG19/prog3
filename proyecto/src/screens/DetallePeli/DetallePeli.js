import React, { Component } from "react";
import "./DetallePeli.css"
import Loader from "../../components/Loader/Loader";


class DetallePeli extends Component {
  constructor(props) {
    super(props);
    this.state = {
      detalle: {},
    };
  }
    componentDidMount() {
        let idPeli= this.props.match.params.id

        fetch(`https://api.themoviedb.org/3/movie/${idPeli}?api_key=a3c55e0abc72e6abaa573f83ee40635f&language=en-US`)
        .then((response) => response.json())
        .then((data) =>
        this.setState({
          detalle: data,
          
        })
      )
      .catch((error) => console.log(error));

    }
  render() {
    let {detalle}= this.state;
    console.log(detalle);
    return (
      <React.Fragment>

        
        <div className="cont">
        <h3 className="tit1">Titulo: {this.state.detalle.title}</h3>
          <img className="pelicula-principal" src={`https://image.tmdb.org/t/p/w500${detalle.poster_path}`} alt={this.state.detalle.original_title} />
          <article className="clasificacion">
                <li className="tit">Sinopsis:</li> {this.state.detalle.overview}
                <li className="tit">Rating:</li>{this.state.detalle.vote_average}
                <li className="tit"> Duracion:</li>{this.state.detalle.runtime} minutos
                <li className="tit">Fecha de Estreno:</li>{this.state.detalle.release_date}
                <li className="tit">Genero: {this.state.detalle.genre} </li>
                
         </article>
         </div>
         <button className='btnfav'></button>
         
       
      </React.Fragment>
    );
  }
  
}


export default DetallePeli
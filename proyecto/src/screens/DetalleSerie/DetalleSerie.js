import React, { Component } from "react";
import "./DetalleSerie.css"



class DetalleSerie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      detalleSerie: {},
    };
  }
    componentDidMount() {
        let idSerie= this.props.match.params.id

        fetch(`https://api.themoviedb.org/3/tv/${idSerie}?api_key=0c5fb97f0c55576b638b49d73fa8d73e&language=en-US`)
        .then((response) => response.json())
        .then((data) =>
        this.setState({
          detalleSerie: data,
          
        })
      )
      .catch((error) => console.log(error));

    }
  render() {
    let {detalleSerie}= this.state;
    console.log(detalleSerie);
    return (
      <React.Fragment>

        
        <div className="cont">
        <h3 className="tit1">Titulo: {this.state.detalleSerie.name}</h3>
          <img className="pelicula-principal" src={`https://image.tmdb.org/t/p/w500${detalleSerie.backdrop_path}`} alt={this.state.detalleSerie.name} />
          <article className="clasificacion">
                <li className="tit">Sinopsis:</li> {this.state.detalleSerie.overview}
                <li className="tit">Rating:</li>{this.state.detalleSerie.vote_average}
                <li className="tit">Fecha de Estreno:</li>{this.state.detalleSerie.first_air_date}
                <ul className="tit">Genero: {this.state.detalleSerie.genre} 

                </ul>
         </article>
         </div>
         <button className='btnfav'></button>
       
      </React.Fragment>
    );
  }
  
}


export default DetalleSerie
import React, { Component } from "react";


class DetallePeli extends Component {
  constructor(props) {
    super(props);
    this.state = {
      detalle: {},
    };
  }
    componentDidMount() {
        let idPeli= this.props.match.params

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
        <h3 className="tit1">Titulo: {detalle.title}</h3>
          <img className="pelicula-principal" src={`https://image.tmdb.org/t/p/w500${detalle.poster_path}`} alt={detalle.original_title} />
          <article className="clasificacion">
                <h1 className="tit">Sinopsis:{detalle.overview}</h1> 
                <h1 className="tit">Rating:{detalle.vote_average}</h1> 
                <h1 className="tit">Duracion:{detalle.runtime} minutos</h1> 
                <h1 className="tit">Fecha de Estreno:{detalle.release_date}</h1> 
                <h1 className="tit">Genero:{detalle.genre}</h1> 
         </article>
         </div>
         <button className='btnfav'></button>
       
      </React.Fragment>
    );
  }
  
}


export default DetallePeli
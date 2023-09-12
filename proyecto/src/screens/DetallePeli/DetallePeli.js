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

        fetch(`https://api.themoviedb.org/3/movie/${idPeli}?api_key=925f4b20191d3e6290b49bd816600eda&language=en-US`)
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
        
        <div>
          <h1> Detalle de peliculas</h1>
          <img className="" src={`https://image.tmdb.org/t/p/w500${detalle.poster_path}`} alt={detalle.original_title} />
        </div>
      
      </React.Fragment>
    );
  }
  
}




export default DetallePeli
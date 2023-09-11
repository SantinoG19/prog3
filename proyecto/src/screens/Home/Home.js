import React, { Component } from "react";
import "./Home.css"
import CardsContainer from "../../components/CardConteiner/CardComteiner"

const endpointsPelis = ['top_rated'];
class Home extends Component {
  constructor() {
    super();
    this.state = {
      top_rated:[],

    };
  }

  componentDidMount() {
    endpointsPelis.map((endpoint, idx) => {
      fetch(`https://api.themoviedb.org/3/movie/${endpoint}?api_key=ba0b591fbb4dcbf21e7a279fceca5d5e&language=en-US&page=1`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        if (endpoint=== 'top_rated' ) {
          this.setState({
            top_rated : data.results,
            titulo: data.original_title

          })
        } 
      }
      )
      .catch((error) => console.log("El error es: " + error));
    })
    
  }

  render() {
    return(

        <main>
    
          
          <h1 class="maintitulos"> LAS PELICULAS MAS POPULARES </h1>
        {this.state.top_rated.length > 0 ? <CardsContainer infoPeli={this.state.top_rated}/> : <h3>Cargando...</h3> }

        <h1 class="maintitulos"> LAS PELICULAS EN TENDENCIA </h1>
        {this.state.top_rated.length > 0 ? <CardsContainer infoPeli={this.state.top_rated}/> : <h3>Cargando...</h3> }
    
    
        </main>

    ) 
  }
}

export default Home;

/** 
class Home extends Component {
  constructor() {
    super();
    this.state = {
      personaje: {},
    };
  }

  componentDidMount() {
    fetch(`https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc`
    )
      .then((response) => response.json())
      .then((data) =>
        this.setState({
          tendencia: data,
        })
      )
      .catch((error) => console.log(error));

      fetch(`https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_release_type=2|3&release_date.gte={min_date}&release_date.lte={max_date}'`
      )
        .then((response) => response.json())
        .then((data) =>
          this.setState({
            populares: data,
          })
        )
        .catch((error) => console.log(error));
  }


  
  render() {
    console.log('me monte');
    console.log(this.state);

    return (
      <section>
        <p>
          el nombre del personaje es: {this.state.personaje.name}
        </p>
      </section>
    );
  }
}


export default Home;
*/
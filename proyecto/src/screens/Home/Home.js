import React, { Component } from "react";
import "./Home.css"
import CardsContainer from "../../components/CardConteiner/CardComteiner"

const endpointsPelis = ['top_rated'];
const endpointsSeries = ['popular']
class Home extends Component {
  constructor() {
    super();
    this.state = {
      top_rated:[],
      popular: []

    };
  }
                      
  componentDidMount() {
    endpointsPelis.map((endpoint, i) => {
      fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=ba0b591fbb4dcbf21e7a279fceca5d5e&language=en-US&page=1`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        {
          this.setState({
            top_rated : data.results,
        
          })
        } 
      }
      )
      .catch((error) => console.log(error));
    })
    endpointsSeries.map((endpoint, i) => {
      fetch(`https://api.themoviedb.org/3/tv/popular?api_key=a3c55e0abc72e6abaa573f83ee40635f&language=en-US&page=1`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        {
          this.setState({
            popular : data.results,
        
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
        {this.state.top_rated.length > 0 ? <CardsContainer infoPeli={this.state.top_rated}/> : <h3>...</h3> }

        <h1 class="maintitulos"> LAS SERIES MAS POPULARES</h1>
        {this.state.top_rated.length > 0 ? <CardsContainer informacionSerie={this.state.popular}/> : <h3>...</h3> }
    
    
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
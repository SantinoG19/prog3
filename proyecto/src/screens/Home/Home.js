import React, { Component } from "react";

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
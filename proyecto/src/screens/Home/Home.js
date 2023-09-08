import React, { Component } from "react";

class Home extends Component {
  constructor() {
    super();
    this.state = {
      personaje: {},
    };
  }

  componentDidMount() {
    fetch("https://rickandmortyapi.com/api/character/2")
      .then((response) => response.json())
      .then((data) =>
        this.setState({
          personaje: data,
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
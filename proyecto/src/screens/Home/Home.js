import React from "react";
import navbar from "../../components/Navbar/navbar";
import Footer from '../../components/Footer/footer';

class Home extends Component {
    constructor() {
      super();
      this.state = {
        Populares: [],
        Tendencia: [],
    };
  }


componentDidMount(){

    fetch("https://rickandmortyapi.com/api/character/2")

    .then(response => response.json())
    .then(data =>)
    .catch(error => console.log(error))
}
  
    
    }
  
  
  export default Home
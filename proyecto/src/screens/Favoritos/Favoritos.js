import React, { Component } from "react";
import "./Favoritos.css"
import CardsContainer from "../../components/CardConteiner/CardComteiner"



class Favoritos extends Component {
  constructor() {
    super();
    this.state = {
      pelis: [],
      series:[]
    };
  }
  componentDidMount(){
    
   
    let guardados = localStorage.getItem('favoritos');
    

    
let favoritos = [];
if (guardados !== null) {
   favoritos = JSON.parse(guardados);
}
let urlM = `https://api.themoviedb.org/3/movie/top_rated?api_key=ba0b591fbb4dcbf21e7a279fceca5d5e&language=en-US&page=1`
fetch(urlM)
.then((response) => response.json())
.then((data) => {
   let pelis = data.results.filter((contenido) => {
      return favoritos.includes(contenido.id);
   });
   this.setState({
      pelis: pelis
   });
})
.catch((e) => console.log(e));




  let traer = localStorage.getItem('favoritosSerie')
  let favoritosSerie= [];

  if (traer !== null){
    favoritosSerie=JSON.parse(traer)
  }
let url = 'https://api.themoviedb.org/3/tv/popular?api_key=a3c55e0abc72e6abaa573f83ee40635f&language=en-US&page=1'
fetch(url)
.then((response)=> response.json())
.then((data)=>{
  let series =data.results.filter((contenido)=>{
    return favoritosSerie.includes(contenido.id);
  });
  this.setState({
    series:series
  });
})
.catch((e)=> console.log(e))

  }


  


  
      


  render() {
    console.log(this.state.pelis);
    console.log(this.state.series)
    return (

      
      <React.Fragment>
        
        <main>
    
          
          <h1 class="maintitulos"> Peliculas Favoritas </h1> 
          <CardsContainer infoPeli={this.state.pelis} />    
          
        <h1 class="maintitulos">Series Favoritas</h1>
        <CardsContainer informacionSerie={this.state.series}/>
        
    
        </main>
      
      </React.Fragment>
    );
  }
  
}




export default Favoritos
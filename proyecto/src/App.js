import React from 'react';
import Home from './screens/Home/Home';
import DetallePeli from './screens/DetallePeli/DetallePeli';
import DetalleSerie from './screens/DetalleSerie/DetalleSerie';
import {Route,Switch} from 'react-router-dom'
import Loader from './screens/Loader/Loader';
import Navbar from './components/Navbar/navbar';
import Footer from './components/Footer/footer';
import Favoritos from './screens/Favoritos/Favoritos';
import NoEncontrada from './screens/NoEncontrada/NoEncontrada';
// import Busqueda from "./screens/Busqueda/Busqueda"
import TodoTopRated from './screens/VerTodas/TodoTopRated';
import TodoPopular from './screens/VerTodas/TodoPopular';
import Buscador from './components/ResutadosBusqueda/ResultadosBusqueda';




function App() {
  return (
    <React.Fragment>
      <Navbar/>
      
      <Switch>
        <Route path="/" exact={true} component={Home}/>
        <Route path="/favoritos" component={Favoritos}/>
        <Route path="/top_rated" component={TodoTopRated}/>
        <Route path="/popular" component={TodoPopular}/>
        <Route path="/ResultadoBusqueda/:input" component={Buscador} />
        <Route path="/DetallePeli/id/:id" exact={true} component={DetallePeli}/>
        <Route path="/DetalleSerie/id/:id" exact={true} component={DetalleSerie}/>
        <Route path="/Buscador" component={Loader}/>
       
        <Route path="" component={NoEncontrada} />
      </Switch>
     <Footer/>
    </React.Fragment>
  );
}

export default App;

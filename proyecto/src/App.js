import React from 'react';


import {Route,Switch} from 'react-router-dom'
import DetallePeli from './screens/DetallePeli/DetallePeli';
import DetalleSerie from './screens/DetalleSerie/DetalleSerie';
import Loader from './screens/Loader/Loader';
import Navbar from './components/Navbar/navbar';
import Footer from './components/Footer/footer';
import Populares from './screens/Populares/Populares';
import Favoritos from './screens/Favoritos/Favoritos';
import Home from './screens/Home/Home';

function App() {
  return (
    <React.Fragment>
      <Navbar/>
      
      <Switch>
        <Route path="/" exact={true} component={Home}/>
        <Route path="/favoritos" component={Favoritos}/>
        <Route path="/DetallePeli/id/:id" exact={true} component={DetallePeli}/>
        <Route path="/DetalleSerie/id/:id" exact={true} component={DetalleSerie}/>
        <Route path="/verTodos" component={Populares}/>
        <Route path="/Buscador" component={Loader}/>
        <Route path="" component={Navbar}/>
        <Route path="" component={Footer}/>
      </Switch>
     <Footer/>
    </React.Fragment>
  );
}

export default App;

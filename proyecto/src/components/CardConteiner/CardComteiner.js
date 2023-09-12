import React, {Component} from 'react';
import CardMovie from '../Card/CardMovie';
import CardSerie from '../Card/CardSerie';
class CardsContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    };
   
    render(){
    
        return(
            <section className='item-row'>
                
                {this.props.infoPeli ?
                this.props.infoPeli.map((pelicula , i) =>{
                    if (i < 5) {
                       return (<CardMovie key={pelicula.title + i} contentPeli={pelicula} />
                        )
                    }
                    })

            : false } 

               {this.props.informacionSerie ?
                this.props.informacionSerie.map((serie , i) =>{
                    if (i < 5) {
                        return (<CardSerie  key={serie.name + i}  contenidoSerie={serie}/>
                        )
                     }    
                })

            : false } 

              {this.props.verMasPelis ?
                    this.props.verMasPelis.map((pelicula , idx) =>
                        <CardMovie key={pelicula.title + idx}  contentPeli={pelicula}/>       
                    )
                    
                : false } 
            
            </section>
            
        )
    }
}

export default CardsContainer
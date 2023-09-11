import React, {Component} from 'react';
import CardMovie from '../Card/CardMovie';
class CardsContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    };

    render(){
    
        return(
            <section className='item-1'>
                
                {this.props.infoPeli ?
                this.props.infoPeli.map((pelicula , idx) =>{
                    if (idx < 6) {
                       return (<CardMovie key={pelicula.title + idx} contentPeli={pelicula} />
                        )
                    }
                    })

            : false } 

           
            </section>
        )
    }
}

export default CardsContainer
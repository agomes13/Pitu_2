import React from 'react';

//importando bootstrap
import { Container } from 'react-bootstrap';

//importando o icone do fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

//importando o header
import Header from '../../components/Header';

class HomePage extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(            
            <Container> 
                <Header>Seu novo Encurtador de URL. </Header>              
                <FontAwesomeIcon icon="check-square" />Pitu 2
            </Container>
        )
    }
}
//antes do bootstrap
            //<p>Pitu</p>

            //depois do bootstrap            
            //<!-- utilizando icone check square -->
            //passando o componente como filho usamos a seguinte sintaxe <component><component>, ex: 
            //<Header><Header/>, para utilizar assim dentro de components/Header preciamos configurar as props
            
            //antes de colocar o icone
            /*
            <Container> 
                <Header title="Titulo">Header Customizado</Header>              
                <FontAwesomeIcon icon="check-square" />
                Pitu 2
            </Container>
            */

            //depois de colocar o icone

export default HomePage;
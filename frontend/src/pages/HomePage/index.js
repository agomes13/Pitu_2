import React from 'react';

//importando componentes do react-bootstrap
import { Container, InputGroup, FormControl, Button, Alert, Spinner } from 'react-bootstrap';

//importando o icone do fontawesome
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

//importando o header
import Header from '../../components/Header';

//importando os estilos da home page de homepage/styles
import {ContentContainer, Form, AdsBlock} from './styles';

//importando o shortner service
import ShortnerService from '../../services/shortenerService';

//IMPORTANDO AS VARIÁVEIS DE CONFIGURAÇÃO DE AMBIENTE
import vars from '../../configs/vars';

class HomePage extends React.Component{
    constructor(props){
        super(props);

        //depois do bootstrap
        this.state = {
            isLoading: false,
            url: '',
            code: '',
            errorMessage: '',
        }
    }
    //depois do bootstrap
    handleSubmit =async (event) => {
        event.preventDefault();

        const {url} = this.state;

        this.setState({isLoading: true, errorMessage: ''})

        if(!url){
            this.setState({isLoading:false, errorMessage:'Informe uma URL para encurtar!!'});
        }else{
            try {
                const service = new ShortnerService();
                const result = await service.generate({url});

                this.setState({isLoading: false, code: result.code});
            } catch (error) {
                this.setState({isLoading: false, errorMessage: 'Ops!, ocorreu um erro ao tentar encurtar a URL.'});
            }
        }
    }
    copyToClipboard = ()=>{
        const element =this.inputURL;
        element.select();
        document.execCommand('copy');
    }
    render(){
        const {isLoading, errorMessage, code} = this.state;
        return(            
            <Container> 
                <Header>Seu novo Encurtador de URL.</Header>              
                <ContentContainer>
                    <Form onSubmit={this.handleSubmit}>
                        <InputGroup className="mb-3">
                            <FormControl 
                                placeholder="Digite a URL para encurtar"
                                defaultValue=""
                                onChange={e =>this.setState({ url: e.target.value })}
                            />
                            <InputGroup.Append>
                                <Button variant="primary" type="submit">Encurtar</Button>
                            </InputGroup.Append>
                        </InputGroup>

                        {
                            isLoading ? (
                                <Spinner animation="border" />
                            ) :(
                                code && (
                                    <>
                                        <InputGroup className="mb-3">
                                            <FormControl  
                                                autoFocus={true}                                       
                                                defaultValue={vars.HOST_APP + code}  
                                                ref={(input) => this.inputURL = input}                                              
                                            />
                                            <InputGroup.Append>
                                                <Button variant="outline-secondary" onClick={()=> this.copyToClipboard()}>Copiar</Button>
                                            </InputGroup.Append>
                                        </InputGroup>
                                        <p>Para acompanhar aas estatísticas, acesse {vars.HOST_APP + code}/stats</p>
                                    </>
                                )
                            )
                        }
                        {errorMessage && <Alert variant="danger">{errorMessage}</Alert>}
                    </Form>
                </ContentContainer>
                <ContentContainer>
                    <AdsBlock>Adense</AdsBlock>
                </ContentContainer>
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
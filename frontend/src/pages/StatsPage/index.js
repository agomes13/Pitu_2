import React from 'react';

import Header from '../../components/Header';

import {Container} from 'react-bootstrap';

import ShortnerService from '../../services/shortenerService';

//importando o  date-fns
import {parseISO, formatRelative} from 'date-fns';
//importando o idioma para formatar a data
import ptBR from 'date-fns/locale/pt-BR';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

import { StatsContainer, StatsRow, StatsBox, StatsBoxTitle } from './styles';

//IMPORTANDO AS VARIÁVEIS DE CONFIGURAÇÃO DE AMBIENTE
import vars from '../../configs/vars';

class StatsPage extends React.Component{
    constructor(props){
        super(props);

        //depois do bootstrap
        this.state = {
            isLoading: false,
            shortnedURL: {},
            errorMessage: '',
        }
    }
async componentDidMount(){
    const {code} = this.props.match.params;

    try {
        const service = new ShortnerService();
        const  shortnedURL = await service.getStats(code);

        //parse da data
        const parsedDate = parseISO(shortnedURL.updatedAt);
        const currentDate = new Date();

        //intervalo entre duas datas formatado para ptBR
        const relativeDate = formatRelative(parsedDate, currentDate, {
            locale: ptBR,
        })

        shortnedURL.relativeDate = relativeDate;
        
        this.setState({isLoading:false, shortnedURL})
    } catch (error) {
        this.setState({isLoading: false, errorMessage: 'Ops!, a url solicitada não existe'});
    }

}
    render(){
        const {errorMessage, shortnedURL} = this.state;
        return(
            <Container>
                <Header>Estatísticas:</Header>
                {
                    errorMessage ? (
                        <StatsContainer className="text-center">
                            <FontAwesomeIcon size="3x" color="#f8d7da" icon="faExclamationTriangle" />
                            <p className="m-3">{errorMessage}</p>
                            <a className="btn btn-primary" href="/">Encurtar nova URL</a>
                        </StatsContainer>
                    ):(
                        <StatsContainer className="text-center">
                            <p><b>{vars.HOST_APP + shortnedURL.code}</b></p>
                            <p>Redireciona para: <br/>{shortnedURL.url}</p>
                            <StatsRow>
                                <StatsBox>
                                    <b>{shortnedURL.hits}</b>
                                    <StatsBoxTitle>Visitas</StatsBoxTitle>
                                </StatsBox>
                                <StatsBox>
                                    <b>{shortnedURL.relativeDate}</b>
                                    <StatsBoxTitle>Última Visita</StatsBoxTitle>
                                </StatsBox>
                            </StatsRow>
                            <a className="btn btn-primary" href="/">Encurtar nova URL</a>
                        </StatsContainer>
                    )
                }
            </Container>
        )
    }
}
// antes do bootstrap
//<p>Pitu/Stats</p>

export default StatsPage;
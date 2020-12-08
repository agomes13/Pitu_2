//aqui criamos o componente cabeçalho

import React from 'react';

//importando a customização que está dentro de Header/styles.js
import {Logo, HeaderContainer} from './styles';

//importando o icone da pasta assets
import Icone from '../../assets/icon_pitu.png';

//usamos as tags <> ... </> para aninhar os componentes que estiverem entre elas
function Header(props){
    return(
        /* //testes
        <>
            <p>Header: {props.title}</p>
            <p>{props.children}</p>
        </>
        */
        <>
            <HeaderContainer>
                <Logo src={Icone} alt='Pitu - Encurtador de URL' />
                <h1>Pitu</h1>
                <p>{props.chidren}</p>
            </HeaderContainer>
        </>
    )
}

export default Header;
//aqui eu defino como serão criadas minhas tabelas do banco de dados

import Sequelize, {Optional, Model} from 'sequelize';

import {Link} from './link';
import database from '../database';

//configurações para o typescript funcionar com sequelize
interface ILinkCreationAttibutes extends Optional<Link, 'id'>{}
export interface ILinkModel extends Model<Link, ILinkCreationAttibutes>, Link{}

// o que está entre chaves na importação do sequelize são os opicionais necessários para as 
//configurações do type script.
//e o que está entre maior e menor após database.define é a regra que deve ser seguida 
//para a criação e manipulação do banco, no caso LinkModel

//fim configurações para o typescript funcionar com sequelize

//configurando a tabela a ser criada, esta regra está entre as tags < >, no caso ILinnkModel
const LinkModel = database.define<ILinkModel>('link',{
    //definindo o atributo id
    id: {
        type: Sequelize.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },

    //definindo o atributo url
    url: {
        //o valor entre parenteses é o tamanho da string
        type: Sequelize.STRING(255),
        allowNull: false
    },

    //definindo o atributo code
    code: {
        //o valor entre parenteses é o tamanho da string
        type: Sequelize.STRING(20),
        unique: true,
        allowNull:false
    },

    //definindo o atributo hits
    hits: {
        type: Sequelize.INTEGER.UNSIGNED,
        allowNull: false,
        defaultValue: 0
    }
})

//exportando a variável para ser utilizada fora deste módulo
export default LinkModel;
//inicializa a conexão com o banco
import {Sequelize} from 'sequelize';

//string de conexão com o banco
var psw: string = "@Albatroz#2020";
const sequelize = new  Sequelize('mysql://tutorial:Tuto@2020@localhost:3306/pitu');

export default sequelize;
import app from './app';

//subindo o banco de dados
import database from './database';

const main = async ()=>{
    try {
        // para testes com force true que cria as tabelas cada vez que sobe o servidor
        //await database.sync({force: true});
        
        //definitivo sem criar a tabela a cada subida do servidor
        await database.sync();
        console.log('Database running at 3306');
    } catch (error) {
        console.log('Ops! cocorreu um erro de conexão com banco!', error);
    }

//fim subindo banco de dados
}
main();

//porta sendo escutada no servidor
app.listen(3000);
console.log('Server running at 3000');


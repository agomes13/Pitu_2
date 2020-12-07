//manipulação das informações e solicitações que vão ser enviadas ao banco

import linkModel, {ILinkModel} from './linkModel';
import {Link} from  './link';

function findByCode(code: string){
    return linkModel.findOne<ILinkModel>({ where: { code}});
}

function add(link: Link){
    return linkModel.create<ILinkModel>(link);
}

async function hit(code: string){
    //lendo o link do banco antes de tratar
    // o comando await antes de findByCode faz com que o programa aguarde
    // a resposta de findByCode, para isso funcionar a função deve ser assincrona
    // para isso ela deve ter a clausula async antes de funcition
    const link = await findByCode(code);

    // testando se veio alguma informação
    if(!link) return null;

    //a exclamação após hits diz ao compilador que estou me responsabilizando
    //que hits tera'um valor válido, com isso evito erros
    link.hits!++;
    await link.save();

    return link;
    
}

//exportando as funções para serem utilizadas fora do módulo
export default{
    findByCode,
    add,
    hit
}
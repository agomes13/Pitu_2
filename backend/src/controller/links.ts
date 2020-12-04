import {Request, Response} from 'express';

// salvando em memoria
import {Link} from '../models/link';

//salvando em memoria
const links : Link[] = [];
let proxId = 1;

function generateCode(){
    // variável criada com let pode ser alterada
    let text = ''; 
    // variável criada com const não pode ser alterada / redeclarada
    const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'; 
    //criando um array com tamanho 5 para a url curta
    for(let i=0; i<5; i++)
        text += possible.charAt(Math.floor(Math.random()*possible.length));

    return text;
}

function postLink(req: Request, res: Response){
    
    //salvando em memoria
    const link = req.body as Link;
    link.id =proxId++;
    link.code = generateCode();
    link.hits = 0;
    links.push(link);

    res.status(201).json(link);

    //utilizado nos testes iniciais
    //res.send('postLink');
}

function getLink(req: Request, res: Response){

    const code = req.params.code as string;
    const link =links.find(item => item.code === code);

    if(!link)
        res.sendStatus(404);
    else
        res.json(link);

    //utilizado nos testes iniciais 
    //res.send('getLink');
}

function hitLink(req: Request, res: Response){
    const code = req.params.code as string;
    const index = links.findIndex(item => item.code === code);

    if(index === -1)
        res.sendStatus(404);
    else{
        // a exclamação após a variavel diz ao compilador que nos
        // responsabilizamos por ter algo na variavel 
        links[index].hits!++; 

        res.json(links[index]);
    }

    
    //utilizado nos testes iniciais 
    //res.send('hitLink');
}

// encapsulando objetos para exportar
export default{
    postLink,
    getLink,
    hitLink
}
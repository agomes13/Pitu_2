import {Request, Response} from 'express';

// salvando em memoria
import {Link} from '../models/link';

//salvando em memoria
//const links : Link[] = [];
//let proxId = 1;
//fim salvando em memoria

//salvando em banco
import linksRepository from '../models/links.Repository';


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

async function postLink(req: Request, res: Response){
    
    
    const link = req.body as Link;
    //salvando em memoria
    //link.id =proxId++;
    //fim salvando em memoria

    link.code = generateCode();
    link.hits = 0;

    // salvando em banco
    const result = await linksRepository.add(link);

    //testando se retornou resultado valido
    if(!result.id) return res.sendStatus(400);

    // se o resultado estiver correto salvo em link.id
    link.id = result.id!;
    // fim salvando em banco

    //salvando em memoria
    //links.push(link);
    //fim salvando em memoria

    res.status(201).json(link);

    //utilizado nos testes iniciais
    //res.send('postLink');
}

function getLink(req: Request, res: Response){
/*
    const code = req.params.code as string;
    const link =links.find(item => item.code === code);

    if(!link)
        res.sendStatus(404);
    else
        res.json(link);

    //utilizado nos testes iniciais 
    //res.send('getLink');
    */
}

function hitLink(req: Request, res: Response){
    const code = req.params.code as string;
    /*
    const index = links.findIndex(item => item.code === code);

    if(index === -1)
        res.sendStatus(404);
    else{
        // a exclamação após a variavel diz ao compilador que nos
        // responsabilizamos por ter algo na variavel 
        links[index].hits!++; 

        res.json(links[index]);       
    }

    */
    //utilizado nos testes iniciais 
    //res.send('hitLink');
}

// encapsulando objetos para exportar
export default{
    postLink,
    getLink,
    hitLink
}
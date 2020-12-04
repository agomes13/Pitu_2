export type Link ={
    id?: number,// a interrogação após o nome da variável tem a função de dizer que o campo é opcional
    url: string,// url longa
    code?: string,// url curta
    hits?: number// quantas vezes foi acessado
}
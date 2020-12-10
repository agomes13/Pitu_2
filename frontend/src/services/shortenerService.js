import baseAPI from './api';

class ShortenerService{
    constructor(){

        //endereço utilizado em localhost antes de publicar na aws
        //this.api = baseAPI('http://localhost:3001/');

        //endereço utilizado após publicar na aws, este endereço é importado das vairaveis de ambiente
        //que estão nos arquivos .env.development e .env.production
        this.api = baseAPI(process.env.REACT_APP_API);

    }

    async getLink(code){
        const result = await this.api.get(`links/${code}`);

        return result.data;
    }

    async getStats(code){
        const result = await this.api.get(`links/${code}/stats`);

        return result.data;
    }

    async generate(model){
        const result = await this.api.post(`links`, model);

        return result.data;
    }
}

export default ShortenerService;
import {Router} from 'express';

// apos criar as rotas na camada controller/links.ts
import linksController from '../controller/links';

const router = Router();
// antes de criar as rotas na camada controller/links.ts
/*
router.post('/links', (req, res)=>{
    res.send('Post');
})

router.get('/links/:code', (req, res)=>{
    res.send('Get');
})

router.get('/links/:code/stats', (req, res)=>{
    res.send('Get stats');
})

export default router;
*/

// apos criar as rotas na camada controller/links.ts
router.post('/links', linksController.postLink);

router.get('/links/:code', linksController.hitLink);

router.get('/links/:code/stats', linksController.getLink);

export default router;
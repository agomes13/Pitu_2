import {Router} from 'express';

const router = Router();

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
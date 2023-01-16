import { Router } from 'express';
import { createLoan } from '../actions/createLoan';
import { getLoan } from '../actions/getLoan';
import { updateLoan } from '../actions/updateLoan';
import { deleteLoan } from '../actions/deleteLoan';

const router = Router();

router.post('/', async (req, res) => {
    try {
        const result = await createLoan(req.body);
        res.status(201).json(result);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.get('/:id', async (req, res) => {
    try {
        const result = await getLoan(req.params.id);
        res.json(result);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.put('/:id', async (req, res) => {
    try {
        const result = await updateLoan(req.params.id, req.body);
        res.json(result);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const result = await deleteLoan(req.params.id);
        res.json(result);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

export default router;

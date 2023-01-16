import { Router } from 'express';
import { createBorrower } from '../actions/createBorrower';
import { getBorrower } from '../actions/getBorrower';
import { updateBorrower } from '../actions/updateBorrower';
import { deleteBorrower } from '../actions/deleteBorrower';

const router = Router();

router.post('/', async (req, res) => {
    try {
        const result = await createBorrower(req.body);
        res.status(201).json(result);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.get('/:id', async (req, res) => {
    try {
        const result = await getBorrower(req.params.id);
        res.json(result);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.put('/:id', async (req, res) => {
    try {
        const result = await updateBorrower(req.params.id, req.body);
        res.json(result);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const result = await deleteBorrower(req.params.id);
        res.json(result);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

export default router;

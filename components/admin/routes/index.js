import { Router } from 'express';
import { createAdmin } from '../actions/createAdmin';
import { getAdmin } from '../actions/getAdmin';
import { updateAdmin } from '../actions/updateAdmin';
import { deleteAdmin } from '../actions/deleteAdmin';

const router = Router();

router.post('/', async (req, res) => {
    try {
        const result = await createAdmin(req.body);
        res.status(201).json(result);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.get('/:id', async (req, res) => {
    try {
        const result = await getAdmin(req.params.id);
        res.json(result);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.put('/:id', async (req, res) => {
    try {
        const result = await updateAdmin(req.params.id, req.body);
        res.json(result);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const result = await deleteAdmin(req.params.id);
        res.json(result);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

export default router;

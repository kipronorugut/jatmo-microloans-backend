import { Router } from 'express';
import { createMember } from '../actions/createMember';
import { getMember } from '../actions/getMember';
import { updateMember } from '../actions/updateMember';
import { deleteMember } from '../actions/deleteMember';

const router = Router();

router.post('/', async (req, res) => {
    try {
        const result = await createMember(req.body);
        res.status(201).json(result);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.get('/:id', async (req, res) => {
    try {
        const result = await getMember(req.params.id);
        res.json(result);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.put('/:id', async (req, res) => {
    try {
        const result = await updateMember(req.params.id, req.body);
        res.json(result);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const result = await deleteMember(req.params.id);
        res.json(result);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

export default router;

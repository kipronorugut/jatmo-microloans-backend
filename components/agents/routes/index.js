const express = require('express');
const router = express.Router();
const SalesAgentController = require('../actions/salesAgentController');

// create a new sales agent
router.post('/salesAgents', SalesAgentController.createSalesAgent);

// retrieve a list of all sales agents
router.get('/salesAgents', SalesAgentController.getAllSalesAgents);

// retrieve a specific sales agent by ID
router.get('/salesAgents/:id', SalesAgentController.getSalesAgent);

// update the information of a specific sales agent
router.put('/salesAgents/:id', SalesAgentController.updateSalesAgent);

// delete a specific sales agent
router.delete('/salesAgents/:id', SalesAgentController.deleteSalesAgent);

module.exports = router;

const SalesAgent = require('../models/salesAgentModel')

class SalesAgentController {

  async createSalesAgent(req, res) {
    try {
      const newAgent = new SalesAgent(req.body)
      await newAgent.save()
      res.status(201).json({ message: 'Sales Agent created successfully', data: newAgent })
    } catch (error) {
      res.status(400).json({ message: 'Error creating Sales Agent', error: error.message })
    }
  }

  async getAllSalesAgents(req, res) {
    try {
      const agents = await SalesAgent.find({})
      res.status(200).json({ message: 'Successfully retrieved all Sales Agents', data: agents })
    } catch (error) {
      res.status(400).json({ message: 'Error retrieving Sales Agents', error: error.message })
    }
  }

  async getSalesAgent(req, res) {
    try {
      const agent = await SalesAgent.findById(req.params.id)
      if (!agent) {
        res.status(404).json({ message: 'Sales Agent not found' })
        return
      }
      res.status(200).json({ message: 'Successfully retrieved Sales Agent', data: agent })
    } catch (error) {
      res.status(400).json({ message: 'Error retrieving Sales Agent', error: error.message })
    }
  }

  async updateSalesAgent(req, res) {
    try {
      const agent = await SalesAgent.findByIdAndUpdate(req.params.id, req.body, { new: true })
      if (!agent) {
        res.status(404).json({ message: 'Sales Agent not found' })
        return
      }
      res.status(200).json({ message: 'Successfully updated Sales Agent', data: agent })
    } catch (error) {
      res.status(400).json({ message: 'Error updating Sales Agent', error: error.message })
    }
  }

  async deleteSalesAgent(req, res) {
    try {
      const agent = await SalesAgent.findByIdAndDelete(req.params.id)
      if (!agent) {
        res.status(404).json({ message: 'Sales Agent not found' })
        return
      }
      res.status(200).json({ message: 'Successfully deleted Sales Agent' })
    } catch (error) {
      res.status(400).json({ message: 'Error deleting Sales Agent', error: error.message })
    }
  }

  async getCommission(req, res) {
    try {
      const agent = await SalesAgent.findById(req.params.id)
      if (!agent) {
        res.status(404).json({ message: 'Sales Agent not found' })
        return
      }
      const commission = agent.loanFee * (agent.commission / 100)
      res.status(200).json({ message: 'Successfully calculated commission', data: commission })
    } catch (error) {
      res.status(400).json({ message: 'Error calculating commission', error:

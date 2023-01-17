// admin.js
const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Loan = require('../models/Loan');
const Notification = require('../models/Notification');
const Settings = require('../models/Settings');

// Get all loans
router.get('/loans', (req, res) => {
  Loan.find()
    .then(loans => res.json(loans))
    .catch(err => res.status(400).json('Error: ' + err));
});

// Get all notifications
router.get('/notifications', (req, res) => {
  Notification.find()
    .then(notifications => res.json(notifications))
    .catch(err => res.status(400).json('Error: ' + err));
});

// Update system settings
router.post('/settings', (req, res) => {
  Settings.findOneAndUpdate({}, req.body)
    .then(settings => res.json('Settings updated!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;


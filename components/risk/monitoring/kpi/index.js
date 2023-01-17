const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Loan = require('../models/loan');

//Route to get loan application rate
router.get('/application-rate', async (req, res) => {
  try {
    const totalApplications = await Loan.countDocuments();
    const approvedApplications = await Loan.countDocuments({ status: 'approved' });
    const applicationRate = (approvedApplications / totalApplications) * 100;
    res.json({ applicationRate });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

//Route to get loan approval rate
router.get('/approval-rate', async (req, res) => {
  try {
    const totalApplications = await Loan.countDocuments();
    const approvedApplications = await Loan.countDocuments({ status: 'approved' });
    const approvalRate = (approvedApplications / totalApplications) * 100;
    res.json({ approvalRate });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

//Route to get loan repayment rate
router.get('/repayment-rate', async (req, res) => {
  try {
    const totalLoans = await Loan.countDocuments();
    const repaidLoans = await Loan.countDocuments({ status: 'repaid' });
    const repaymentRate = (repaidLoans / totalLoans) * 100;
    res.json({ repaymentRate });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

//Route to get loan default rate
router.get('/default-rate', async (req, res) => {
  try {
    const totalLoans = await Loan.countDocuments();
    const defaultedLoans = await Loan.countDocuments({ status: 'defaulted' });
    const defaultRate = (defaultedLoans / totalLoans) * 100;
    res.json({ defaultRate });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

//Route to get loan delinquency rate
router.get('/delinquency-rate', async (req, res) => {
  try {
    const totalLoans = await Loan.countDocuments();
    const delinquentLoans = await Loan.countDocuments({ status: 'delinquent' });
    const delinquencyRate = (delinquentLoans / totalLoans) * 100;
    res.json({ delinquencyRate });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;


const cron = require('node-cron');
const mongoose = require('mongoose');
const Loan = require('./models/Loan');
const Admin = require('./models/Admin');

const LOAN_DEFAULT_RATE_THRESHOLD = 0.1;
const LOAN_REPAYMENT_RATE_THRESHOLD = 0.8;

cron.schedule('* * * * *', async () => {
  const loanDefaultRate = await Loan.count({ status: 'default' }) / await Loan.count();
  const loanRepaymentRate = await Loan.count({ status: 'repaid' }) / await Loan.count();

  if (loanDefaultRate > LOAN_DEFAULT_RATE_THRESHOLD) {
    const admin = await Admin.findOne({ role: 'superAdmin' });
    // Send alert to admin
  }

  if (loanRepaymentRate < LOAN_REPAYMENT_RATE_THRESHOLD) {
    const admin = await Admin.findOne({ role: 'superAdmin' });
    // Send alert to admin
  }
});

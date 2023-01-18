const mongoose = require('mongoose');
const LoanBookGL = require('./models/LoanBookGL');
/**
 * This module receives all transactions either via routes or cron jobs 
 * and updates the GL loan book.
 */ 
const processTransaction = async (transaction) => {
  try {
    // Find the current loan book GL
    const loanBookGL = await LoanBookGL.findOne();

    // Update the appropriate fields based on the transaction type
    switch (transaction.type) {
      case 'loan_disbursement':
        loanBookGL.loansDisbursed += transaction.amount;
        break;
      case 'repayment':
        loanBookGL.loansRepaid += transaction.amount;
        break;
      case 'interest_charge':
        loanBookGL.interestIncome += transaction.amount;
        break;
      case 'default':
        loanBookGL.loanLosses += transaction.amount;
        break;
    }

    // Save the updated loan book GL
    await loanBookGL.save();
  } catch (error) {
    console.error(error);
  }
};

module.exports = { processTransaction };

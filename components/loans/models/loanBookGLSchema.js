const mongoose = require('mongoose');

const LoanBookGLSchema = new mongoose.Schema({
    loansIssued: { type: Number, required: true },
    totalLoanAmount: { type: Number, required: true },
    totalInterestIncome: { type: Number, required: true },
    totalFees: { type: Number, required: true },
    totalLosses: { type: Number, required: true },
    totalRepayments: { type: Number, required: true },
    totalOutstanding: { type: Number, required: true },
    delinquencyRate: { type: Number, required: true },
    defaultRate: { type: Number, required: true },
    interestIncomeRatio: { type: Number, required: true },
    feeIncomeRatio: { type: Number, required: true },
    lossRatio: { type: Number, required: true },
    loanToValueRatio: { type: Number, required: true },
    debtServiceCoverageRatio: { type: Number, required: true },
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('LoanBookGL', LoanBookGLSchema);

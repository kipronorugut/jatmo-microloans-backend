/**
 * A typical entry on a loan ledger would include the loan account number, the borrower's name and identification, the loan amount, the interest rate, the loan term, the loan disbursement date, the repayment schedule, the outstanding balance, the payments made, and any fees or penalties applied. Additionally, there may be entries for late payments, interest charges, and other loan-related transactions.
 */
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const loanMasterLedgerSchema = new Schema({
    loan: { type: Schema.Types.ObjectId, ref: 'Loan' },
    loanTransactions: [{ type: Schema.Types.ObjectId, ref: 'LoanTransaction' }],
    balance: { type: Number, required: true },
    interest: { type: Number, required: true },
    penalties: { type: Number, required: true },
    fees: { type: Number, required: true },
    date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('LoanMasterLedger', loanMasterLedgerSchema);

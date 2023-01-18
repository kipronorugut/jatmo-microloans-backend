/**
 * A Transactions Ledger in the context of a lending app would be a database collection or table that keeps track of all financial transactions related to the loans being issued by the lending app. It would typically include entries such as loan disbursements, loan repayments, interest charges, fees, penalties, and any other financial transactions that take place within the lending app. This ledger would be used to keep an accurate and up-to-date record of the financial health of the lending app and to generate financial statements such as income statements, balance sheets, and cash flow statements. The Transactions Ledger would be linked to other ledgers such as the Loan Master Ledger, Interest Receivable Ledger, Fees and Charges Ledger, Repayment Ledger, and Guarantor Ledger.
 */
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const transactionsLedgerSchema = new Schema({
    loanId: { type: Schema.Types.ObjectId, ref: 'Loan' },
    transactionDate: { type: Date, default: Date.now },
    transactionType: { type: String, enum: ['repayment', 'disbursement', 'late fee', 'penalty'] },
    amount: { type: Number, required: true },
    description: { type: String },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('TransactionsLedger', transactionsLedgerSchema);

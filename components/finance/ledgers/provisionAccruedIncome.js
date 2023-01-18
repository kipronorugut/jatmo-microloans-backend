/**
 * The Provision for Accrued Income Ledger is a financial record that keeps track of the income that has been earned but not yet received.
 */

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProvisionAccruedIncomeSchema = new Schema({
    loanId: { type: Schema.Types.ObjectId, ref: 'Loan' },
    income: { type: Number, required: true },
    incomeType: { type: String, required: true },
    dateAccrued: { type: Date, required: true },
    dateReceived: Date
});

module.exports = mongoose.model('ProvisionAccruedIncome', ProvisionAccruedIncomeSchema);

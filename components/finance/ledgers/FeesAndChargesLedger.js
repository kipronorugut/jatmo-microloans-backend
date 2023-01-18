const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const FeesAndChargesLedgerSchema = new Schema({
    loanId: { type: Schema.Types.ObjectId, ref: 'Loan' },
    transactionType: { type: String, required: true },
    transactionAmount: { type: Number, required: true },
    transactionDate: { type: Date, default: Date.now },
    notes: { type: String, default: '' },
});

module.exports = mongoose.model('FeesAndChargesLedger', FeesAndChargesLedgerSchema);

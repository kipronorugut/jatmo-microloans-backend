const mongoose = require('mongoose');

const RepaymentLedgerSchema = new mongoose.Schema({
    loanId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Loan',
        required: true
    },
    transactionId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'LoanTransaction',
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    amount: {
        type: Number,
        required: true
    },
    type: {
        type: String,
        enum: ['Principal', 'Interest', 'Penalty'],
        required: true
    },
    status: {
        type: String,
        enum: ['Pending', 'Cleared'],
        default: 'Pending'
    }
});

module.exports = mongoose.model('RepaymentLedger', RepaymentLedgerSchema);

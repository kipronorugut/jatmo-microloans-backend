const mongoose = require('mongoose');

const LoanLossProvisionSchema = new mongoose.Schema({
    loan: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Loan',
        required: true
    },
    loanLossProvision: {
        type: Number,
        required: true
    },
    loanLossProvisionReason: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now()
    }
});

module.exports = mongoose.model('LoanLossProvision', LoanLossProvisionSchema);

/**
 * An Escrow Ledger is a financial tool used to hold funds in a neutral third-party account until certain conditions are met. In the context of a lending app, the Escrow Ledger would be used to hold funds for loan collateral, such as a deposit or property, until the loan has been fully repaid.
 */
const mongoose = require('mongoose');

const EscrowLedgerSchema = new mongoose.Schema({
    borrowerId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Borrower',
        required: true
    },
    loanId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Loan',
        required: true
    },
    depositAmount: {
        type: Number,
        required: true
    },
    collateralType: {
        type: String,
        required: true
    },
    releaseDate: {
        type: Date,
        required: true
    },
    status: {
        type: String,
        enum: ['active', 'released'],
        default: 'active'
    }
});

module.exports = mongoose.model('EscrowLedger', EscrowLedgerSchema);

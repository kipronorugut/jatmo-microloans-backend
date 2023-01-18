/**
 * A General Ledger in the context of a lending app would typically include entries for all financial transactions of the business, including revenue, expenses, and any other income or losses. The mongoose db model for a General Ledger would include fields for the transaction date, description, debit and credit amounts, and the account that the transaction corresponds to. The model would also include a reference to the loan or borrower associated with the transaction.
 */
const mongoose = require("mongoose");

const GeneralLedgerSchema = new mongoose.Schema({
    transactionDate: {
        type: Date,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    debit: {
        type: Number,
        required: true,
    },
    credit: {
        type: Number,
        required: true,
    },
    account: {
        type: String,
        required: true,
    },
    loanId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Loan"
    },
    borrowerId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Borrower"
    }
});

const GeneralLedger = mongoose.model("GeneralLedger", GeneralLedgerSchema);
module.exports = GeneralLedger;

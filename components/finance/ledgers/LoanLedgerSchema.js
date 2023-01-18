/**
 * A loan ledger is a record of all the financial transactions related to a particular loan. It typically includes entries for the loan principal, interest charges, fees, and any other charges or payments associated with the loan.
  A mongoose db model for a loan ledger might include fields for the loan ID, the loan amount, the interest rate, the start and end dates of the loan, the loan status (active, closed, defaulted, etc.), and any other relevant information. Additionally, it could include fields for the borrower ID and the lender ID, as well as any other parties involved in the loan.
 */

const mongoose = require("mongoose");

const LoanLedgerSchema = new mongoose.Schema({
  loanId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Loan",
    required: true,
  },
  loanAmount: {
    type: Number,
    required: true,
  },
  interestRate: {
    type: Number,
    required: true,
  },
  startDate: {
    type: Date,
    required: true,
  },
  endDate: {
    type: Date,
  },
  loanStatus: {
    type: String,
    required: true,
  },
  borrowerId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Borrower",
    required: true,
  },
  lenderId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Lender",
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("LoanLedger", LoanLedgerSchema);

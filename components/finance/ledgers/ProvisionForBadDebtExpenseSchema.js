/**
 * The Provision for Bad Debt Expense Ledger is a record of the expenses incurred in the process of trying to recover defaulted loans
 */
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProvisionForBadDebtExpenseSchema = new Schema({
  loanId: {
    type: Schema.Types.ObjectId,
    ref: "Loan",
    required: true,
  },
  expenseType: {
    type: String,
    required: true,
  },
  expenseAmount: {
    type: Number,
    required: true,
  },
  dateIncurred: {
    type: Date,
    default: Date.now,
  },
  notes: {
    type: String,
  },
  defaultedLoanId: {
    type: Schema.Types.ObjectId,
    ref: "DefaultedLoans",
    required: true,
  },
});

module.exports = ProvisionForBadDebtExpense = mongoose.model(
  "ProvisionForBadDebtExpense",
  ProvisionForBadDebtExpenseSchema
);

import mongoose, { Schema } from "mongoose";

const loanTransactionSchema = new Schema({
  loan: {
    type: Schema.Types.ObjectId,
    ref: "Loan",
    required: true,
  },
  transactionType: {
    type: String,
    required: true,
    enum: ["repayment", "interest", "penalty"],
  },
  amount: {
    type: Number,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  notes: {
    type: String,
  },
});

loanTransactionSchema.pre("save", function (next) {
  if (this.transactionType === "repayment") {
    this.loan.currentBalance -= this.amount;
  }
  if (this.transactionType === "interest") {
    this.loan.currentBalance += this.amount;
  }
  if (this.transactionType === "penalty") {
    this.loan.currentBalance += this.amount;
  }
  next();
});

const LoanTransaction = mongoose.model(
  "LoanTransaction",
  loanTransactionSchema
);

export default LoanTransaction;

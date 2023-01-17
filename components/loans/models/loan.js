import mongoose, { Schema } from "mongoose";

const loanSchema = new Schema({
  borrower: {
    type: Schema.Types.ObjectId,
    ref: "Borrower",
    required: true,
  },
  loanCategory: {
    type: Schema.Types.ObjectId,
    ref: "LoanCategory",
    required: true,
  },
  sellingAgent: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "SalesAgent",
    required: true,
  },
  loanAmount: {
    type: Number,
    required: true,
  },
  loanTerm: {
    type: Number,
    required: true,
  },
  loanStartDate: {
    type: Date,
    required: true,
  },
  loanEndDate: {
    type: Date,
    required: true,
  },
  loanStatus: {
    type: String,
    required: true,
    enum: ["pending", "approved", "active", "overdue", "defaulted", "closed"],
    default: "pending",
  },
  currentBalance: {
    type: Number,
    required: true,
  },
  loanTransactions: [
    {
      type: Schema.Types.ObjectId,
      ref: "LoanTransaction",
    },
  ],
  deleted: {
    type: Boolean,
    default: false,
  },
});

loanSchema.pre("save", function (next) {
  if (this.isNew) {
    this.currentBalance = this.loanAmount;
  }
  next();
});

const Loan = mongoose.model("Loan", loanSchema);

export default Loan;
